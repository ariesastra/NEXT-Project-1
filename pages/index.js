import Head from 'next/head'

// COMPONENTS
import Navbar from '../components/Nav'
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar'
import Carousel from '../components/Carousel'
import Card from '../components/Card'
import {data} from '../actions/index'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous" />
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossOrigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossOrigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossOrigin="anonymous"></script>
      </Head>
      
      {/* NAVBAR */}
      <Navbar />
      
      <div className='home-page'>
        <div className="container">
          <div className="row">
            {/* SIDEBAR */}
            <Sidebar />
            {/* MAIN BODY */}
            <div className="col-lg-9">
              {/* CAROUSEL */}
              <Carousel />
              <div className="row">
                {/* CARD */}
                <Card data={data}/>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* FOOTER */}
      <Footer />
      <style jsx>
      {`
        .home-page{
          padding-top: 80px;
        }
      `}
      </style>
    </div>
  )
}
