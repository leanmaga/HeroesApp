import HeroesList from '../components/HeroesList'

const DcPage = () => {
  return (
    <>

      <h1 className='m-3 text-center'>DC Heroes</h1>
      <hr className='m-3 text-white' />

      <HeroesList publisher='DC Comics' />

    </>
  )
}

export default DcPage