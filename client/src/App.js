import {useState,useEffect} from 'react';
import {ethers} from 'ethers';
import './App.css';
import Buy from './components/buy';
import Memos from './components/memos';
import abi from './contract/BuyMeACoffee.json';
import Avatar from './components/Avatar';

function App() {
 const [state,setState]=useState({
  provider:null,
  signer:null,
  contract:null
 })
 const [account,setAccount] = useState("None")
 useEffect(()=>{
  const connectWallet=async()=>{
    const contractAddress='0xc76411aD78Cf3F06033CdD89299BEef39E41D074';
    const contactAbi=abi.abi;
    try{
      const {ethereum}=window;
      if(ethereum){
        const account=await ethereum.request({method:'eth_requestAccounts'});
        window.ethereum.on("chainChanged",()=>{
          window.location.reload();
        })
        window.ethereum.on("accountsChanged",()=>{
          window.location.reload();
        })
      
      
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer= provider.getSigner();
      const contract= new ethers.Contract(contractAddress,contactAbi,signer);
      setAccount(account);
      setState({provider,signer,contract});
      
    
    }else{
      alert('install krle bhai')
    }
  }
    catch(error){
      console.log(error);
    }

  }
  connectWallet();

 },[])

  console.log(state);
  return <div>
   <Avatar />
  <Buy state={state} account={account} />
  <p>Connected Account-{account}</p>
  <Memos state={state} />

    </div>
  

}

export default App;
