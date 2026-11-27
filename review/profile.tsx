import { mount } from '../src/mount'
import { ProfilePage } from '../src/pages/ProfilePage'
import { content } from './sample-content'

mount(<ProfilePage content={content} profileHref="./" caseStudyHref={() => '../project/'} sample />)
