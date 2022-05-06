import WorkImg from '../assets/workImg.png';
import workImg2 from '../assets/workImg2.png';

export const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
            Work
          </p>
          <p className='py-6'>// Check out some of my recent work</p>
        </div>

        {/* Container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-2 gap-4'>

          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${WorkImg}` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div '
          >

            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                LinkedIn Learning
              </span>
              <div className='pt-8 text-center'>
                <a href='https://lynda01.netlify.app/ ' target="_blank">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='https://github.com/utukaule/linkedin-learning' target="_blank">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>

          </div>

          <div
            style={{ backgroundImage: `url(${workImg2})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                MaxFashion
              </span>
              <div className='pt-8 text-center'>
                {/* <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a> */}
                <a href='https://github.com/utukaule/MaxFashion' target="_blank">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Grid Item */}
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-2 gap-4 mt-6'>
          
          
          <div className='  '>
            <p>
              MaxFasion is India’s largest e-commerce store for fashion and lifestyle
              products
            </p>
            <br />

            <p>
              <b>
                Tech Stack: <br />
              </b>
            </p>

            <p>
              ● HTML & CSS, <br />
              ● Javascript, <br />
              ● Bootstrap, <br />
            </p>
            <p>
              <b>
                Areas of responsibility:
              </b>
            </p>
            <p>
              Designed the entire Home page <br />
            </p>
            <p>
              Designed a completely functional ready navbar <br />
            </p>
            <p>
              Linked the entire website to offer the user a smooth experience
            </p>

          </div>
          
          
          <div className='  '>
            <p>
              Linked Learning is one of the most popular sites for learning information
              technology related course <br />
            </p>
            <p>
              <b>
              Tech Stack: <br />
              </b>
            </p>
            <p>
              ● Javascript, <br />
              ● HTML, <br />
              ● CSS <br />
              ● BootStrap
            </p>

            <p>
              <b>
              Areas of responsibility: <br />
              </b>
            </p>
            <p>
              ● Built the entire Landing page with complete functionality <br />
            </p>
            <p>
              ● Built the entire user authentication system across the entire
              website <br />
            </p>
            <p>
              ● Designed an import ready and fully functional navbar <br />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}