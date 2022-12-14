import { NextPage } from 'next';
import Editor from '../components/Editor/Editor';

const Home: NextPage = () => {
    return (
        <div className='flex min-h-screen w-full  flex-col items-center'>
            <h1 className='mb-2 text-2xl font-bold'>TipTap laboratory</h1>
            <Editor />
        </div>
    );
};

export default Home;
