import { useRouter } from 'next/router';
import Link from 'next/link';

import { FcGoogle } from 'react-icons/fc';
import { AiFillGithub } from 'react-icons/ai';
import { TbBrandMeta } from 'react-icons/tb';
import Head from 'next/head';
import useCustom from '../hooks/custom';

const Login = () => {
  const { user, error, loginWithGoogle, loginWithGithub } = useCustom();
  const router = useRouter();
  console.log(user);
  if (user) {
    console.log(`object`);
    router.replace('/');
    return <h1>Loading...</h1>;
  }
  return (
    <>
      <Head>
        <title>{`Login -  Review Detective`}</title>
      </Head>
      <div
        className="container-fluid position-relative Layout-container"
        style={{
          maxWidth: '1500px',
          overflowX: 'hidden',
          minHeight: 'calc(100vh - 190px)',
        }}
      >
        <div className="container-fluid Login_board_container">
          {/* Search  */}
          <div className="row my-5">
            <div className="col-md-8">
              <p className="m-0 px-5 text-center">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad
                quia numquam ut magni ipsum nemo voluptatibus, unde rem vel,
                repellendus dolor sequi fuga quisquam, dolores error quas nam
                non inventore. Minima ullam facere reprehenderit blanditiis
                libero rerum animi esse minus! Mollitia, inventore voluptatibus
                excepturi nemo molestias ut illo nobis, maiores sit ipsum
                laborum quidem commodi possimus sequi necessitatibus suscipit
                ducimus placeat, omnis ad quis eveniet accusantium ab
                repellendus dolorum. Quod ducimus quo iste maiores excepturi
                dolor natus vel molestiae, odio voluptatibus architecto cum,
                vero ut sequi autem molestias ipsum obcaecati dignissimos sit
                minus magni. Unde, dolor incidunt. Quas vero maxime
                necessitatibus, temporibus placeat modi pariatur praesentium rem
                nemo ipsa iusto unde eaque aspernatur tenetur at. Nihil
                accusantium ab soluta dicta voluptates aut maxime, porro enim
                quas fugit fugiat obcaecati inventore consequatur, autem sequi
                itaque! Incidunt, quam ipsa perferendis adipisci numquam quas
                blanditiis eius saepe doloribus non, beatae, dignissimos
                delectus asperiores dolores quae quos iusto minima sapiente
                labore debitis! Voluptates, ea nam? Blanditiis doloremque illum
                corrupti?
              </p>
            </div>
            <div className="col-md-3 rounded shadow login__container d-flex flex-column  align-items-center justify-content-between py-5">
              <h4 className="text-center">Please Login</h4>
              <div className="options mt-4 d-flex flex-column">
                <button className="p-2 px-4 mb-3" onClick={loginWithGoogle}>
                  <FcGoogle
                    style={{
                      color: 'white',
                      fontSize: '2rem',
                      marginRight: '5px',
                    }}
                  />
                  Continue with Google
                </button>
                <button className="p-2 px-4 mb-3" onClick={loginWithGithub}>
                  <AiFillGithub
                    style={{
                      color: 'white',
                      fontSize: '2rem',
                      marginRight: '5px',
                    }}
                  />{' '}
                  Continue with Github
                </button>
                <button className="p-2 px-4 mb-3">
                  <TbBrandMeta
                    style={{
                      color: '#0C8CE9',
                      fontSize: '2rem',
                      marginRight: '5px',
                    }}
                  />{' '}
                  Continue with Meta
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
