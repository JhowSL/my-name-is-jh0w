import ErrorStatus from '@/components/features/StatusErrorMessage'
import LoadingSpin from '@/components/features/StatusLoadingMessage'
import WarnStatus from '@/components/features/StatusWarnMessage'
import { fetchSkills } from './fetchSkill.hook'

export function GetSkill() {
  const { getAllSkills } = fetchSkills()
  const { data, isLoading, error } = getAllSkills

  if (isLoading) {
    return {
      skills: null,
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
      skills: null,
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
      skills: null,
      isLoading: false,
      warnComponent: (
        <div className="flex justify-center">
          <WarnStatus message={'Nenhuma Skill Cadastrada'} />
        </div>
      ),
    }
  }

  return {
    skills: data,
    isLoading: false,
    error: null,
    loadingComponent: null,
    errorComponent: null,
    warnComponent: null,
  }
}
