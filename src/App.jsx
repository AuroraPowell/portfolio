
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Content from './components/content.jsx'
import Header from './components/head.jsx'
import Modal from './components/eventComponents/modal.jsx'
import modalBG from './assets/modalBG.jpg'
// import Footer from './components/foot.jsx'

function CountMeIn() {
  return (
    <div className='flex flex-col bg-cover min-h-screen bg-purple-400 bg-opacity-70'>

      <p className='text-9xl uppercase top-0 mx-auto text-center blur-md pt-9'>brat summer</p> 
      {/* <Header /> */}
      <div className='relative flex justify-center items-center m-auto'>
        <img className='border-4 border-lime-500 relative my-auto w-80 h-80 rounded-3xl z-0' src={modalBG} /> 
        <p className='absolute my-auto font-bold text-3xl font-mono z-30 text- text-lime-100'>soon</p>
        {/* <p className='absolute font-bold blur-lg my-auto p-3 rounded-tr-3xl rounded-bl-3xl border-red-500 border-8 bg-lime-400 text-[#00300] z-20'>Coming Soon...</p> */}
        <p className='w-32 absolute my-auto h-32 rounded-full text-fuchsia-500 text-opacity-0 bg-lime-500 border-4 border-fuchsia-500'> .</p>
      </div>
      {/* <Modal />
      <Content /> */}
      {/* <Footer /> */}
    </div>
  )
}

export default CountMeIn



