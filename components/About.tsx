import Image from 'next/image';

const About = () => {
  return (
    <div id="about-us" className="bg-gray-100">
      <div className="container mx-auto pt-10 px-4 pb-5">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <h1 className="text-blue-600 text-4xl font-black leading-tight tracking-[-0.033em] sm:text-5xl sm:font-black sm:leading-tight sm:tracking-[-0.033em]">
              About TechVantage
            </h1>
            <p className="text-[#0d141c] text-base font-normal leading-normal max-w-[720px]">
              TechVantage is a conference designed to inspire students to start their journey in tech. Our platform brings together professionals and tech enthusiast to share their story.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="flex flex-col gap-4">
              <Image
                src="/2151266607.jpg"
                alt="Our Mission"
                width={600}
                height={100}
                className="rounded-xl"
              />
              <h2 className="text-black text-3xl font-black leading-tight tracking-[-0.033em]">
                Our Mission
              </h2>
              <p className="text-[#0d141c] text-base font-normal leading-normal text-justify">
                Our mission is to create an inclusive and supportive environment where tech enthusiasts can learn, grow, and collaborate. We believe that by providing access to quality education and resources, we can help shape the future of technology.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <Image
                src="/8376.jpg"
                alt="Our Vision"
                width={600}
                height={100}
                className="rounded-xl"
              />
              <h2 className="text-black text-3xl font-black leading-tight tracking-[-0.033em]">
                Our Vision
              </h2>
              <p className="text-[#0d141c] text-base font-normal leading-normal text-justify">
                We envision a world where technology is accessible to everyone, and where every individual has the opportunity to contribute to and benefit from technological advancements. Our vision is to be a leading force in tech education and community building.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4 mt-5">
            <h2 className="text-black text-3xl font-black leading-tight tracking-[-0.033em]">
              Our Objectives
            </h2>
            <div className="relative flex flex-col lg:flex-row lg:items-start gap-10 pl-8 lg:pl-0 mx-3">
              <div className="relative flex items-start gap-4 lg:gap-10 lg:items-center lg:pr-8">
                <div className="absolute left-[-11px] top-1 lg:top-auto lg:left-auto transform lg:translate-x-[-50%] h-6 w-6 rounded-full bg-[#0b6fda] border-4 border-white"></div>
                <div className='px-5'>
                  <h3 className="text-black text-xl font-bold leading-tight tracking-[-0.033em]">Define and Refine</h3>
                  <p className="text-[#0d141c] text-base font-normal leading-normal">
                    Define target audience and create strategies to effectively engage with them.
                  </p>
                </div>
              </div>
              <div className="relative flex items-start gap-4 lg:gap-10 lg:items-center lg:pr-8">
                <div className="absolute left-[-11px] top-1 lg:top-auto lg:left-auto transform lg:translate-x-[-50%] h-6 w-6 rounded-full bg-[#0b6fda] border-4 border-white"></div>
                <div className='px-5'>
                  <h3 className="text-black text-xl font-bold leading-tight tracking-[-0.033em]">Build and Establish</h3>
                  <p className="text-[#0d141c] text-base font-normal leading-normal">
                    Assemble a team and partner with institutions for skill development.
                  </p>
                </div>
              </div>
              <div className="relative flex items-start gap-4 lg:gap-10 lg:items-center lg:pr-8">
                <div className="absolute left-[-11px] top-1 lg:top-auto lg:left-auto transform lg:translate-x-[-50%] h-6 w-6 rounded-full bg-[#0b6fda] border-4 border-white"></div>
                <div className='px-5'>
                  <h3 className="text-black text-xl font-bold leading-tight tracking-[-0.033em]">Launch and Promote</h3>
                  <p className="text-[#0d141c] text-base font-normal leading-normal">
                    Launch events and marketing campaigns to promote skill development.
                  </p>
                </div>
              </div>
              <div className="relative flex items-start gap-4 lg:gap-10 lg:items-center lg:pr-8">
                <div className="absolute left-[-11px] top-1 lg:top-auto lg:left-auto transform lg:translate-x-[-50%] h-6 w-6 rounded-full bg-[#0b6fda] border-4 border-white"></div>
                <div className='px-5'>
                  <h3 className="text-black text-xl font-bold leading-tight tracking-[-0.033em]">Expand and Engage</h3>
                  <p className="text-[#0d141c] text-base font-normal leading-normal">
                    Grow program offerings and community engagement through events and mentorship.
                  </p>
                </div>
              </div>
              <div className="relative flex items-start gap-4 lg:gap-10 lg:items-center lg:pr-8">
                <div className="absolute left-[-11px] top-1 lg:top-auto lg:left-auto transform lg:translate-x-[-50%] h-6 w-6 rounded-full bg-[#0b6fda] border-4 border-white"></div>
                <div className='px-5'>
                  <h3 className="text-black text-xl font-bold leading-tight tracking-[-0.033em]">Scale and Evaluate</h3>
                  <p className="text-[#0d141c] text-base font-normal leading-normal">
                    Assess impact and expand to more institutions and students.
                  </p>
                </div>
              </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default About;