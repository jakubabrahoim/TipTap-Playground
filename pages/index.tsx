import { NextPage } from 'next';
import Editor from '../components/Editor';

const Home: NextPage = () => {
    return (
        <div className={`flex w-full  flex-col items-center`}>
            <h1 className='mb-2 text-2xl font-bold'>TipTap laboratory</h1>
            <Editor />
        </div>
    );
};

export default Home;
