import {Outlet}  from 'react-router-dom'

function AboutPage() {
  return (
    <div>
      AboutPage
      <Outlet/> {/* children pass*/}
    </div>
  )
}

export default AboutPage