import Get from './Get';
import Post from './Post';

// POST
const postNewsBlog = (data) => Post('posts', false, data);

// GET
const getNewsBlog = () => Get('posts?_sort=id&_order=desc', false);
const getComments = () => Get('comments', true);

const API = {
    getNewsBlog,
    getComments,
    postNewsBlog
}

export default API;
