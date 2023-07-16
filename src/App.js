import { useAddress, useTokenSupply, ConnectWallet, useContract, useTokenBalance ,useTransferToken , useBurnToken, useMintToken} from "@thirdweb-dev/react";
import { useState } from "react";
import "./styles/Home.css";


export default function Home({ Component, pageProps }) {
const tokenAddress = "0xFe1Bbf2d1467043b26CFD2BecA04b3A5A00fFff1";
const tokenSymbol = 'JBT';
const tokenDecimals = 18;
  async function addTokenFunction() {
    try {
      const wasAdded = await window.ethereum.request({
        method: 'wallet_watchAsset',
        params: {
          type: 'ERC20', 
          options: {
            address: tokenAddress, 
            symbol: tokenSymbol, 
            decimals: tokenDecimals, 
          },
        },
      });
    
      if (wasAdded) {
        console.log('Thanks for your interest!');
      } else {
        console.log('HelloWorld Coin has not been added');
      }
    } catch (error) {
      console.log(error);
    }
  }
  const address = useAddress();
  const { contract } = useContract(tokenAddress, "token-drop");
  const { data: totalSupply, isLoading: totalSupplyLoading, } = useTokenSupply(contract);
  const { data: UserBalance, isLoading: UserBalanceLoding, } = useTokenBalance(contract, address);

  const [amount, setAmount] = useState("");
  const [reciverAddress, setReciverAddress] = useState("");
  const {mutate: transferTokens, } = useTransferToken(contract);

  const [burnAmount, setBurnAmount] = useState("");
  const { mutateAsync: burnToken, burnTokenIsLoading,  } = useBurnToken(contract);

  const [mintAmount, setMintAmount] =  useState("");
  const { mutateAsync: mintToken, mintTokenIsLoading,  } = useMintToken(contract);

  return (
    <main className="main text-white grid grid-rows-1 bg-gray-950 h-full w-full justify-center ">
      <div className="flex flex-col justify-center">
        <div className="connect flex sm:flex-row flex-col sm:justify-between items-center gap-4 justify-center">
          <div className="text-7xl font-extrabold pl-2 text-white">
            JB TOKEN
          </div>
          <div className="pr-2 self-center">
            <ConnectWallet dropdownPosition={{side: "bottom", align: "center",}}/>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="p-1 flex sm:flex-row flex-col gap-2">
            <div className="p-3 grow rounded-xl border border-slate-500 flex flex-col gap-2">
              <div className="text-xl font-bold">
                Total Supply
              </div>
              <div className="text-md font-bold">
                {totalSupplyLoading?(
                  <div>
                    Loading...
                  </div>
                ):(
                  <div>
                    {totalSupply?.displayValue} {totalSupply?.symbol}
                  </div>
                )}
              </div>
            </div>
            <div className="p-3 grow rounded-xl border border-slate-500 flex flex-col gap-2">
              <div className="text-xl font-bold">
                Your Balance
              </div>
              <div className="text-md font-bold">
                {address?(
                  <div>
                    {UserBalanceLoding?(
                      <div>
                        Loading...
                      </div>
                    ):(
                      <div>
                        {UserBalance?.displayValue} {UserBalance?.symbol}
                      </div>
                    )}
                  </div>
                ):(
                  <div className="">
                    00000.0 JBT
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="p-3 rounded-xl border border-slate-500 flex flex-col gap-2 ">
            {/* Transfer Section */}
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <input className="grow p-1 rounded-md text-black" placeholder="0x000000000000000000000" type="text" value={reciverAddress} onChange={(e)=>setReciverAddress(e.target.value)}/>
              <input className="grow p-1 rounded-md text-black" placeholder="Enter Transfer Amount" type="number" value={amount} onChange={(e)=>setAmount(e.target.value)}/>
            </div>
            <div className="p-1 flex flex-row w-full justify-end ">
              {address?(
                <button onClick={() => transferTokens({ amount, to: reciverAddress})} className="bg-blue-500 p-1 rounded-md hover:bg-blue-600 flex flex-row gap-2 px-2 items-center">
                  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" data-theme="light" focusable="false" className="chakra-icon css-13otjrl" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                  <div> Transfer</div>
                </button>
              ):(
                <div>
                  <button className="bg-blue-500 p-1 rounded-md px-2 flex flex-row gap-2 items-center cursor-no-drop"> <div className="text-lg">⍉</div> <div>Transfer</div></button>
                </div>
              )}
            </div>
          </div>
          <div className="p-3 rounded-xl border border-slate-500 flex sm:flex-row  flex-col gap-2 ">
            <div className="grow flex flex-col gap-2">
            {/* Burn Section */}
            <div className="flex flex-col justify-center gap-3">
              <input className="grow p-1 rounded-md text-black" placeholder="Enter Burn Amount" type="number" value={burnAmount} onChange={(e)=>setBurnAmount(e.target.value)}/>
            </div>
            <div className="p-1 flex flex-row w-full justify-end ">
            {address?(
              <button className="bg-blue-500 p-1 rounded-md hover:bg-blue-600 flex flex-row gap-2 items-center px-3" onClick={() => burnToken({amount: burnAmount})} disabled={burnTokenIsLoading}>
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 384 512" data-theme="light" focusable="false" className="chakra-icon css-13otjrl" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M192 0C79.7 101.3 0 220.9 0 300.5 0 425 79 512 192 512s192-87 192-211.5c0-79.9-80.2-199.6-192-300.5zm0 448c-56.5 0-96-39-96-94.8 0-13.5 4.6-61.5 96-161.2 91.4 99.7 96 147.7 96 161.2 0 55.8-39.5 94.8-96 94.8z"></path></svg>
                <div> Burn</div>
              </button>
            ):(
              <div>
                <button  className="bg-blue-500 p-1 rounded-md px-5 flex flex-row gap-2 items-center cursor-no-drop"><div className="text-lg">⍉</div> Burn</button>
              </div>
            )}
            </div>
            </div>
            <div className="grow flex flex-col gap-2">
            {/* Mint Section */}
              <div className="flex flex-col justify-center gap-3">
                <input className="grow p-1 rounded-md text-black" placeholder="Enter Mint Amount" type="number" value={mintAmount} onChange={(e)=>setMintAmount(e.target.value)}/>
              </div>
              <div className="p-1 flex flex-row w-full justify-end ">
              {address?(
                <button onClick={() => mintToken({amount: mintAmount,  to: address})} disabled={mintTokenIsLoading} className="bg-blue-500 p-1 rounded-md hover:bg-blue-600 flex flex-row gap-2 items-center px-3">
                  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" data-theme="light" focusable="false" className="chakra-icon css-13otjrl" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                  <div > Mint</div>
                </button>
              ):(
                <div>
                  <button  className="bg-blue-500 p-1 rounded-md px-5 flex flex-row gap-2 items-center cursor-no-drop"><div className="text-lg">⍉</div> Mint</button>
                </div>
              )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
      {address?(
        <div className="flex flex-row justify-center gap-2">
          <button className="bg-blue-500 rounded-md p-1 px-2 " type="submit" onClick={addTokenFunction}>Add Token To Metamask 🦊</button>
          <a href="https://twitter.com/jyotirmoydotdev/" target="_blank" rel="noopener noreferrer">
          <div className="bg-blue-500 rounded-md p-1 px-2 text-white flex flex-row items-center gap-1"> 
              <div className="font-bold">
                Twitter
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16"> <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/> </svg>
            </div>
          </a>
          <a href="https://github.com/jyotirmoydotdev/" target="_blank" rel="noopener noreferrer">
            <div className="bg-white rounded-md p-1 px-2 text-black flex flex-row items-center gap-1"> 
              <div className="font-bold">
                Github
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-github" width="20" height="20" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" /> </svg>
            </div>
          </a>
        </div>
      ):(
        <div className="flex sm:flex-row flex-col items-center sm:justify-center gap-2">
          <div className="bg-blue-500 rounded-md p-1 px-2">
            To Add Token Connect To Metamask 🦊
          </div>
          <div className=" flex flex-row gap-2">
          <a href="https://twitter.com/jyotirmoydotdev/" target="_blank" rel="noopener noreferrer">
          <div className="bg-blue-500 rounded-md p-1 px-2 text-white flex flex-row items-center gap-1"> 
              <div className="font-bold">
                Twitter
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16"> <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/> </svg>
            </div>
          </a>
          <a href="https://github.com/jyotirmoydotdev/" target="_blank" rel="noopener noreferrer">
            <div className="bg-white rounded-md p-1 px-2 text-black flex flex-row items-center gap-1"> 
              <div className="font-bold">
                Github
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-github" width="20" height="20" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" /> </svg>
            </div>
          </a>
          </div>
        </div>
      )}
      </div>
    </main>
  );
}
