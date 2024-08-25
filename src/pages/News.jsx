import React, {useRef, useState} from "react";
import axios from 'axios'


// function search(){
//     axios.get(`https://api.github.com/search/users?q=${keyword}`).then(
//         response => {console.log('success', response.data)},
//         error => {console.log('fail',error)}
//     )
// }
export default function News(){
  const inputRef = useRef(null);
  const [inputValue, setInputValue] = useState('');
 
  const search = () => {
    if (inputRef.current) {
      setInputValue(inputRef.current.value);
      console.log('Input value:', inputRef.current.value);
      axios.get(`https://api.github.com/search/users?q=${inputValue}`).then(
      response => {console.log('success', response.data)},
      error => {console.log('fail',error)}
    )
    }
  };
    return (
        <section className="jbo">
            <h3>搜索github用户</h3>
            <div>
                <input ref={inputRef} type="text" placeholder="输入关键字点击搜索"></input>&nbsp;
                <button onClick={search}>搜索</button>
            </div>
        </section>
    )
}