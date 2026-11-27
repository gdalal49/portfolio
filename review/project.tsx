import { mount } from '../src/mount'
import { CaseStudyPage } from '../src/pages/CaseStudyPage'
import { portfolioSections } from '../src/pages/ProfilePage'
import { content, sampleCase } from './sample-content'

mount(<CaseStudyPage profile={content.profile} sections={portfolioSections(content)} profileHref="../profile/" project={sampleCase} number="01" sample />)
