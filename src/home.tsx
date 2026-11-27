import { profile } from './content/profile'
import { mount } from './mount'
import { CoverPage } from './pages/CoverPage'

mount(<CoverPage profile={profile} profileHref="./profile/" />)
