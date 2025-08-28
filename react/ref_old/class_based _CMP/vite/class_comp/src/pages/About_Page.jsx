import {About} from '../components/About'
import {Profile_CMP} from '../components/class_based_profile'

export const About_Page = ()=>(
    <>
    <About/>
    <Profile_CMP name={'hello'}/> {/* class based CMP*/}
    </>
)