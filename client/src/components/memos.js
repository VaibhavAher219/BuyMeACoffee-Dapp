import { useState, useEffect } from "react";
import './table.css';
const Memos = ({ state }) => {
  const [memos, setMemos] = useState([]);
  const { contract } = state;

  useEffect(() => {
    const memosMessage = async () => {
      const memos = await contract.getMemos();
      setMemos(memos);
    };
    contract && memosMessage();
  }, [contract]);

  return (
    <>
      <p className='msg' style={{ textAlign: "center", marginTop: "20px" ,color:'white'}}>Messages</p>
      {memos.map((memo) => {
        return (
          <div
            className="container-fluid"
            style={{ width: "100%" }}
            key={Math.random()}
          >
            <table
              style={{
                marginBottom: "10px",
              }}
            >
              <tbody>
                <tr>
                  <td
                 className="td1"
                  >
                    {memo.name}
                  </td>
                  <td className="td2"
                   
                  >
                    {new Date(memo.timestamp * 1000).toLocaleString()}
                  </td>
                  <td className="td3"
                   
                  >
                    {memo.message}
                  </td>
                  <td className="td4"
                   
                  >
                    {memo.from}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      })}
    </>
  );
};
export default Memos;