import Image from 'next/image'
import { Inter } from 'next/font/google'
import Nav from '../components/Nav.js';
import heroImage from '../public/images/hero-image.png';
import solution from '../public/images/solution-d.png';
import social from '../public/images/social.png';
import writingImg from '../public/images/writing-design.png';
import dollarImg from '../public/images/conversion-design.png';
import consultImg from '../public/images/consultation-design.png';
import goalsImg from '../public/images/goals.png';
import clearPlan from '../public/images/clear-plan.png';
import updates from '../public/images/updates.png';
import Form from '@/components/Form.js';
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Nav />
      {/* Hero  */}
      <div className="flex flex-col text-center items-center  text-secondary md:flex-row-reverse md:justify-between
        md:max-w-screen-lg md:mx-auto">
        {/* image */}
        <div className="md:w-1/2 grid">
          <Image
            src={heroImage}
            width={300}
            height={300}
            alt="a landing page design by fitwelldesignmarketing"
            className="md:relative md:justify-self-end"
          />
        </div>
        {/* text */}
        <div className="flex flex-col gap-2 items-center  md:items-start md:w-1/2 md:pl-4">
          <h1 className="text-2xl text-center md:text-left">Transform Your Online Success: Experience Results-Driven Web Design and Marketing Excellence</h1>
          <h2>web design that gets you paying customers</h2>
          <button className="text-primary bg-[#FF7F00] px-8 py-3 text-xl rounded-lg">
            Free consultation
          </button>
          <p>get ideas to grow your business now!!!</p>
        </div>
      </div>
      {/* section 2 */}
      <h1 className="text-secondary text-center text-xl font-semibold mt-10">
        We Provide a One-Stop Solution for All Your Digital Needs.
      </h1>
      <div className="flex flex-col mt-10 pb-6 px-2 md:flex-row md:items-center gap-5 md:max-w-screen-lg md:mx-auto">

        <div className="md:w-1/2">
          <Image
            src={solution}
            className="w-[20rem] mx-auto"
            alt="mockup design"
          />
        </div>
        <div className="text-secondary text-center md:text-left text-lg md:w-1/2 md:text-xl md:text-left
        ">
          <h1 className="text-secondary text-xl font-semibold">
          A One-Stop Solution to grow.
          </h1>
          <p>no more hiring different professionals for different tasks, everything you need to grow your business in one place -
            <i>all your digital needs in one place</i></p>
        </div>
      </div>

      {/* section 3 Usp */}

      <div className="text-secondary text-center flex flex-col gap-16 px-2">
        <div>
          <p className="text-2xl">Our Services</p>
          <h2 className="text-xl font-semibold">Focus on Your business while we focus on getting you customers</h2>
        </div>
        <div className="flex flex-col md:flex-row md:items-center gap-5 md:max-w-screen-lg mx-auto">
          <Image
            src={social}
            className="w-[40rem] mx-auto md:w-1/2"
            alt="mockup design"
          />
          <div className="md:w-1/2 md:text-left">
            <h1 className="text-2xl">social media marketing and management</h1>
            <p className="text-lg md:text-left">Our top-notch social media strategy grows your audience and generates results with effective ad campaigns.</p>
          </div>
        </div>


        <div className="flex flex-col md:flex-row-reverse md:items-center md:max-w-screen-lg mx-auto">
          <div className="md:w-1/2">
            <Image
              src={writingImg}
              className="w-[40rem]  md:w-[100%] mx-auto"
              alt="mockup design "
            />
          </div>
          <div className="md:w-1/2 md:text-left md:mt-10">
            <h1 className="text-2xl">content writing and copy writing</h1>
            <p className="text-lg md:text-left">
              We collaborate with you to create authoritative and credible content that builds trust with your audience. copywriting that tells the value of your service or product and gains more sales
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:items-center gap-5 md:max-w-screen-lg mx-auto">
          <div className="w-[50%] mx-auto grid">
            <Image
              src={dollarImg}
              className="w-[15rem] mx-auto place-self-center"
              alt="mockup design "
            />
          </div>
          <div className="md:w-1/2 md:text-left">
            <h1 className="text-2xl">web design services, designed to attract and convert for increased revenue.</h1>
            <p className="text-lg">
              An effective website communicates your value and resonates with visitors.
              Our expert web design services offer not only stunning visuals but also optimization for SEO to improve your online presence and maximize your revenue potential.
            </p>
          </div>
        </div>

      </div>
      {/* Call-to-action */}
      <div className="pt-10 text-center flex flex-col items-center text-secondary px-3 gap-3 md:flex-row-reverse md:items-center gap-5
      md:max-w-screen-lg mx-auto">

        <div className="md:w-1/2">
          <Image
            src={consultImg}
            className="w-[30rem] mx-auto md:w-[100%]"
            alt="mockup design"
          />
        </div>

        <div className="md:w-1/2 md:text-left md:items-start">
          <h1 className="text-2xl font-medium md:text-left">Access professional strategies and guidelines to grow your business Now!</h1>
          <button className="text-primary bg-[#FF7F00] px-8 py-3 text-xl rounded bg-black mt-5">
            {/* Teal:#008080 */}
            Start a free consultation
          </button>
        </div>
      </div>


      {/* work flow process */}


      <div className="flex flex-col gap-10 px-4">
        <h1 className="text-center text-secondary text-2xl py-10">
          Delivering Results: Unveiling Our Comprehensive Process for Driving Profits with Web Design and Marketing
        </h1>
        <div className="flex flex-col md:flex-row-reverse md:items-center gap-5 md:max-w-screen-lg mx-auto">
          <Image
            src={goalsImg}
            alt="fitwelld esign marketing understanding your Goals"
            className="mx-auto md:w-[30%]"
          />
          {/* Text */}
          <div className="md:w-1/2 flex flex-col">
            <h1 className="text-center text-secondary text-2xl md:text-start">Understanding Your Goals and Challenges</h1>
            <p className="text-center text-secondary text-lg leading-relaxed md:text-start">
              By gaining clarity on your needs, current goals, and challenges, we can work together to create a strategic plan or solution that will help you achieve success</p>
          </div>

        </div>

        <div className="flex flex-col md:flex-row gap-10 md:items-center md:max-w-screen-lg mx-auto">
          <Image
            src={clearPlan}
            alt="fitwelld esign marketing understanding your Goals"
            className="mx-auto md:w-[30%]"
          />
          {/* Text */}
          <div className="md:w-1/2 flex flex-col md:text-start">
            <h1 className="text-center md:text-start text-secondary text-2xl">Developing a solution and clear plan of action</h1>
            <p className="text-center text-secondary text-lg leading-relaxed flex flex-col md:text-start">
              Developing a comprehensive solution and creating a detailed plan of action is essential in effectively addressing your goals and challenges. This process involves  analysis of the situation, identifying potential obstacles, and outlining specific steps that will be taken to achieve the desired outcome.
            </p>
          </div>

        </div>

        <div className="flex flex-col md:flex-row-reverse gap-10 md:items-center md:max-w-screen-lg mx-auto">
          <Image
            src={updates}
            alt="fitwelld esign marketing understanding your Goals"
            className="mx-auto md:w-[30%]"
          />
          {/* Text */}
          <div className="md:w-1/2 flex flex-col md:text-start">
            <h1 className="text-center md:text-start text-secondary text-2xl">providing regular updates on progress</h1>
            <p className="text-center md:text-start text-secondary leading-relaxed text-lg">
              Providing regular weekly updates on current progress is crucial to ensure that we are on track towards achieving the desired goals. and if needed adjustments are made              </p>
          </div>

        </div>



      </div>


      {/* Conatact Us */}
      <div>
        <Form />
      </div>
    </>

  )
}
