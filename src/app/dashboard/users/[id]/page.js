import loadSingleData from '@/utils/loadSingleData';
import loadUserData from '@/utils/loadUserData';

export const generateMetadata = async({params}) =>{
    const {name} = await loadSingleData(params.id);
    return {
        title:name,
    }
};

export const generateStaticParams = async()=>{
    const users = await loadUserData();

    return users.map(({id}) =>({id: id.toString()}));
        // {
        //  users.map((user) =>({id:user.id.toString();}))
        // }
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