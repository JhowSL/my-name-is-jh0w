import ErrorStatus from '@/components/features/StatusErrorMessage'
import LoadingSpin from '@/components/features/StatusLoadingMessage'
import WarnStatus from '@/components/features/StatusWarnMessage'
import { fetchProjects } from './fetchProject.hook'

export function GetProjects() {
  const { getAllProjects } = fetchProjects()
  const { data, isLoading, error } = getAllProjects

  if (isLoading) {
    return {
      projects: null,
      isLoading: true,
      loadingComponent: (
        <div className="flex justify-center">
          <LoadingSpin />
        </div>
      ),
    }
  }

  if (error) {
    return {
      projects: null,
      error: true,
      loadingComponent: null,
      errorComponent: (
        <div className="flex justify-center">
          <ErrorStatus message={'Algo deu errado'} />
        </div>
      ),
    }
  }

  if (!Array.isArray(data)) {
    return {
      projects: null,
      isLoading: false,

      warnComponent: (
        <div className="flex justify-center">
          <WarnStatus message={'Nenhum Projeto Cadastrado'} />
        </div>
      ),
    }
  }

  return {
    projects: data,
    isLoading: false,
    error: null,
    loadingComponent: null,
    errorComponent: null,
    warnComponent: null,
  }
}
