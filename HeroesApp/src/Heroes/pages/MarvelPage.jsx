import HeroesList from '../components/HeroesList'

const MarvelPage = () => {
  return (
    <>
      <h1 className='m-3 text-center'>Marvel Heroes</h1>
      <hr className='m-3 text-white'/>

      <HeroesList publisher='Marvel Comics'/>
    
    </>
  )
}

export default MarvelPage