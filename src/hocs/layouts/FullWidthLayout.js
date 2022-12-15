import Alert from 'components/alert'
import Footer from 'components/navigation/Footer'
import Navbar from 'components/navigation/Navbar'
import React from 'react'
import { connect } from 'react-redux'

const FullWidthLayout = ({children}) => {
  return (
    <div>
        <Navbar />
        {children}
        <Footer />
        <Alert />
    </div>
  )
}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps,{

}) (FullWidthLayout);