import { ContainerHeader } from './HeaderContainer'

export function Header() {
  return (
    <ContainerHeader>
      <nav className="flex justify-center">
        <ul className="flex flex-row space-x-2">
          <li>
            <a href="#profile">Profile</a>
          </li>
          <li>
            <a href="#biography">Bio</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
        </ul>
      </nav>
    </ContainerHeader>
  )
}
