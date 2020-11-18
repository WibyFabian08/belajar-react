import React from 'react';
// import YouTubeComp from '../../component/YouTubeComp/YouTubeComp';
import Product from '../Product/Product';

class Home extends React.Component {
    render() {
        return(
            // <div>
            //     <YouTubeComp 
            //         time='7.12'
            //         title='Belajar React js part 1'
            //         desc='100x ditonton, 2 hari yang lalu' 
            //     />
            //     <YouTubeComp 
            //         time='9.17' 
            //         title='Belajar React js part 2' 
            //         desc='10x ditonton, 3 hari yang lalu' 
            //     />
            //     <YouTubeComp 
            //         time='10.21' 
            //         title='Belajar React js part 3' 
            //         desc='500x ditonton, 10 hari yang lalu' 
            //     />
            //     <YouTubeComp 
            //         time='7.12' 
            //         title='Belajar React js part 4' 
            //         desc='1k ditonton, 12 hari yang lalu' 
            //     />
            //     <YouTubeComp />
            // </div> 
            <Product></Product>

        )
    }
}

export default Home;