import Feed from '@components/Feed'

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">
            Redefine and Explore
            <br className="max-md:hidden"/>
            <span className="custom_gradient text-center">Prompts backed by the goodness of AI</span>
        </h1>
        <p className="desc text-center">ProLit is an AI prompting tool where one can create, redefine and use creative prompts.</p>


        <Feed/>





    </section>
  )
}

export default Home