import React,{Component} from 'react';  
const todos=['item1','item2','item3'];
const data=[{title:"aaa_1",author:"aaa_2",date:"aaa_3"},
    {title:"bbb_1",author:"bbb_2",date:"bbb_3"},
    {title:"ccc_1",author:"ccc_2",date:"ccc_3"}
]
const Book2 =()=> <h1>Hello, world!</h1>
const Book_2_1=()=>  (<ul>
    {todos.map(message=><li key={message} >{message}</li>)}
</ul>);           
class PostItem extends Component{
    constructor(props){
        super(props);
        this.state={
            vote:0
        };
    }
    handleClick(){
        let vote =this.state.vote;
        vote++;
        this.setState({
            vote:vote
        });
    }
    render(){
        const{title,author,date}=this.props;
        return(
            <li key={title}>
                {title}{author}{date}
                <button onClick={()=>{this.handleClick();}}>{this.state.vote}</button>
            </li>
        );
    }
}
class PostList extends Component{
    render(){
        return(<ul>{data.map(item=><PostItem title={item.title} author={item.author} date={item.date}/>)}
            
        </ul>);
    }
}

class PostList_2 extends Component{
    constructor(props){
        super(props);
        this.state={
            posts:[]
        };
        this.timer=null;
        this.handleVote=this.handleVote.bind(this);
    }
    componentDidMount(){
        this.timer=setTimeout(()=>{
            this.setState({
                posts:[
                    {id:1,title:"aaa_1",author:"aaa_2",date:"aaa_3",vote:0},
                    {id:2,title:"bbb_1",author:"bbb_2",date:"bbb_3",vote:0},
                    {id:3,title:"ccc_1",author:"ccc_2",date:"ccc_3",vote:0}
                ]
            })
        },1000)
    }
    componentWillUnmount(){
        if(this.timer){
            clearTimeout(this.timer);
        }
    }
    handleVote(id){
        const posts =this.state.posts.map(item=>{const newItem= item.id=== id ?{...item,vote:++item.vote}:item;
            return newItem;});
        this.setState({posts});
    }
    render(){
        return(<ul>{this.state.posts.map(item=><PostItem_2 post={item} onVate={this.handleVote} />)}
        </ul>);
    }
}
function PostItem_2(props){
    const handleClick=()=>{
        props.onVate(props.post.id);
    };
    const {post}= props;
    return (
        <li>{post.title}{post.author}{post.date}<button onClick={handleClick}>{post.vote}</button>
        </li>
    )
}
export default Book2; 
export {Book_2_1,PostList,PostList_2};