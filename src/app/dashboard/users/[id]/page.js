import loadSingleData from '@/utils/loadSingleData';

export const generateMetadata = () =>{
    return {
        title:'Meta Data'
    }
}

const page = async ({params}) => {
    const {id, name, email } = await loadSingleData(params.id);
    return (
        <div className='flex'>
            {id}, {name}, {email},
        </div>
    );
};

export default page;