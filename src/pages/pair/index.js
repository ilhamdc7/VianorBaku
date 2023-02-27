import React from 'react'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import Product from '@/components/Product/Product'

const index = () => {
  return (
    <>
    <Header/>
    <div style={{height:'auto',width:'90%', border:'red solid', marginLeft:'auto', marginRight:'auto', display:'flex'}}>
        <div style={{width:'45%', height:'auto',border:'blue solid'}}>
            <div style={{width:'100%', height:'auto', display:'flex'}}> 
                <div style={{width:'48%', height:'600px', marginTop:'20px'}}>
                    <Product/>
                </div>
                <div style={{width:'48%', height:'650px', marginTop:'20px', marginLeft:'1.5%'}}>
                    <Product/>
                </div>
            </div>
        </div>

        <div style={{width:'45%', height:'auto',border:'green solid',marginLeft:'5%',display:'flex'}}>
            <div style={{width:'100%', height:'auto', display:'flex'}}>
                <div style={{width:'48%', height:'600px', marginTop:'20px'}}>
                        <Product/>
                    </div>
                    <div style={{width:'48%', height:'650px', marginTop:'20px', marginLeft:'1.5%'}}>
                        <Product/>
                    </div>
                </div>
            </div>
        </div>
    <Footer/>
    </>
  )
}

export default index