import React, { useEffect, useState } from 'react';
import inputData from './input.json'
import { ProductList } from '../Home/styles';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
  // const dispatch = useDispatch(); 
  const [output, setOutput] = useState(null);
  const [currLogic,setCurrLogic] = useState('')
  const { payBeneficiaries } = {
    "payBeneficiaries": [{
      "tokiId": "de228a23-a1e8-49f5-90b9-61203eaa861a",
      "beneficiaryPayId": "c946c383-6a64-476a-b903-3bc8baaa716c",
      "parentBenePayId": "",
      "tokenAddress": "IFbMU91169zqwNOm6086WUXYDRm759fayTebADn618",
      "beneficiary": {
        "topId": "06d5e9eb-7110-4c90-aa77-97b3d8ca2c9a",
        "businessId": "15c58e7d-18dd-49e3-ad86-0bf3f6e5013a",
        "businessName": "Royal NNJ p.l.c."
      },
      "payAmount": {
        "ccy": "USD",
        "value": 46
      },
      "payStatus": ""
    },
    {
      "tokiId": "de228a23-a1e8-49f5-90b9-61203eaa861a",
      "beneficiaryPayId": "b1da8c12-cb0d-4b0e-8a30-75362dbf73b4",
      "parentBenePayId": "c946c383-6a64-476a-b903-3bc8baaa716c",
      "tokenAddress": "qLXTc16270WpodPD8404LfRVogU273BzmtIEFMd522",
      "beneficiary": {
        "topId": "d56eebf3-b97b-429c-ae09-e488d85169cf",
        "businessId": "a52b0a2d-532b-4fd1-b667-c25691217e5e",
        "businessName": "Hammes Macejkovic and Steuber"
      },
      "payAmount": {
        "ccy": "USD",
        "value": 45
      },
      "payStatus": ""
    },
    {
      "tokiId": "de228a23-a1e8-49f5-90b9-61203eaa861a",
      "beneficiaryPayId": "f5f04b9b-5711-44d5-b06e-fb525d269310",
      "parentBenePayId": "c946c383-6a64-476a-b903-3bc8baaa716c",
      "tokenAddress": "ilHhR92549FtXyls9985lfQSGUi707ynUeJhqom743",
      "beneficiary": {
        "topId": "96737c75-7a7f-4edc-a6b5-cb3149879a78",
        "businessId": "4e3b061d-5706-45b4-925d-cab675c95d98",
        "businessName": "Torphy-Osinski"
      },
      "payAmount": {
        "ccy": "USD",
        "value": 43
      },
      "payStatus": ""
    },
    {
      "tokiId": "de228a23-a1e8-49f5-90b9-61203eaa861a",
      "beneficiaryPayId": "2a027e32-ac76-48e4-9ab5-bec130211107",
      "parentBenePayId": "c946c383-6a64-476a-b903-3bc8baaa716c",
      "tokenAddress": "UBpCS24376ynDQAw6353bXrWUzv318FPyYKvldA527",
      "beneficiary": {
        "topId": "0f9c1849-2c1d-42ae-bdb1-40d83d912171",
        "businessId": "92ea79f3-ed3f-42e1-8f4c-9e1ccb3d746a",
        "businessName": "Schinner Inc"
      },
      "payAmount": {
        "ccy": "USD",
        "value": 70
      },
      "payStatus": ""
    },
    {
      "tokiId": "de228a23-a1e8-49f5-90b9-61203eaa861a",
      "beneficiaryPayId": "d0ec2133-fb2f-4cf2-8d2b-3d8d9eed7d09",
      "parentBenePayId": "f5f04b9b-5711-44d5-b06e-fb525d269310",
      "tokenAddress": "sBgxh39835QvBwrJ1898UOZzoYI184KSJVWAhmH701",
      "beneficiary": {
        "topId": "54c30c9f-a792-4659-adfc-b4287994cf1e",
        "businessId": "e6b95c56-ca17-40a4-b5f7-3a0c9fa9b327",
        "businessName": "Ferry-Donnelly"
      },
      "payAmount": {
        "ccy": "USD",
        "value": 91
      },
      "payStatus": ""
    },
    {
      "tokiId": "de228a23-a1e8-49f5-90b9-61203eaa861a",
      "beneficiaryPayId": "e0b87efe-1bd3-4584-b102-2210ab2bd8a7",
      "parentBenePayId": "2a027e32-ac76-48e4-9ab5-bec130211107",
      "tokenAddress": "ClsuI35918hoXayB7866SLRwujr366GbtWhDoNu540",
      "beneficiary": {
        "topId": "b934b36a-0ab5-4869-9220-3bfd90bfb956",
        "businessId": "c47836bb-87e2-482b-bbf0-d42073c372c6",
        "businessName": "Lueilwitz-Johns"
      },
      "payAmount": {
        "ccy": "USD",
        "value": 17
      },
      "payStatus": ""
    },
    {
      "tokiId": "de228a23-a1e8-49f5-90b9-61203eaa861a",
      "beneficiaryPayId": "f58d63f6-e823-493a-acf4-226a9c4d21a1",
      "parentBenePayId": "f5f04b9b-5711-44d5-b06e-fb525d269310",
      "tokenAddress": "uEefy79523TnUElW1192piIHfSj122IqhKSieWj914",
      "beneficiary": {
        "topId": "4e86ab2e-3a2a-4914-a0b3-153439c4013b",
        "businessId": "aead7de0-f2f3-46ce-a013-f83833b9ec0a",
        "businessName": "Ward-Collier"
      },
      "payAmount": {
        "ccy": "USD",
        "value": 37
      },
      "payStatus": ""
    },
    {
      "tokiId": "de228a23-a1e8-49f5-90b9-61203eaa861a",
      "beneficiaryPayId": "17263490-9b2b-4b87-a638-cbdaf0cd9daa",
      "parentBenePayId": "f5f04b9b-5711-44d5-b06e-fb525d269310",
      "tokenAddress": "mEFQT39603cyaoGp1902lgZjFpX633XMVctJZxF094",
      "beneficiary": {
        "topId": "751b8076-d7ca-4cca-922b-aabcc4b39845",
        "businessId": "6ae1d6e1-9a3b-482b-9c2a-861b3bea0cd4",
        "businessName": "Nikolaus Dickinson and Wiegand"
      },
      "payAmount": {
        "ccy": "USD",
        "value": 64
      },
      "payStatus": ""
    },
    {
      "tokiId": "de228a23-a1e8-49f5-90b9-61203eaa861a",
      "beneficiaryPayId": "71e36088-724f-4075-be14-5fdb37944447",
      "parentBenePayId": "b1da8c12-cb0d-4b0e-8a30-75362dbf73b4",
      "tokenAddress": "HbADG14928CoTlWP6421fhACcdS514URjPfkbQn117",
      "beneficiary": {
        "topId": "a6c67099-9937-4daa-829f-9b91adfea9a1",
        "businessId": "dbbb2e12-e50a-4905-93c1-29768b6ed74d",
        "businessName": "Rath Group"
      },
      "payAmount": {
        "ccy": "USD",
        "value": 92
      },
      "payStatus": ""
    },
    {
      "tokiId": "de228a23-a1e8-49f5-90b9-61203eaa861a",
      "beneficiaryPayId": "d50f34c9-9576-4511-9c49-4fe1fc296a57",
      "parentBenePayId": "b1da8c12-cb0d-4b0e-8a30-75362dbf73b4",
      "tokenAddress": "dpCHG81877adzPiU9543MDaBvdw097yQGAdapIY302",
      "beneficiary": {
        "topId": "12e65313-943a-406a-9771-bd8485a35862",
        "businessId": "70d44d44-f7bf-4fd3-a475-378be757d86f",
        "businessName": "MacGyver Inc"
      },
      "payAmount": {
        "ccy": "USD",
        "value": 47
      },
      "payStatus": ""
    }
    ]
  };
  var input = inputData;

  // Implemented Using Find function with external JSON file

  function getOrgHierarchyLogic1() {

    const getParent = (data, parentBenePayId) => {
      return data.payBeneficiaries.find(
        pBen => pBen.beneficiaryPayId === parentBenePayId
      );
    };

    let logic1 = input.payBeneficiaries.map(ben => {
      let parent = getParent(input, ben.parentBenePayId);
      let output = {
        orgHierarchy: [ben.beneficiary.businessName],
      };
      if (parent) {
        output.orgHierarchy.splice(0, 0, parent.beneficiary.businessName);
        if (parent.parentBenePayId) {
          let grandParent = getParent(input, parent.parentBenePayId);
          if (grandParent) {
            output.orgHierarchy.splice(0, 0, grandParent.beneficiary.businessName);
          }
        }
      }
      return output;
    });
    //console.log(res);
    setCurrLogic("logic1");
    setOutput(logic1);
    toast.success("Logic 1 output rendered successfully")

  }
  // implemented using reduce function with internal JSON
  function getOrgHierarchyLogic2() {

    const payBeneficiaryLookupById = payBeneficiaries.reduce(
      (acc, pb) => ({ ...acc, [pb.beneficiaryPayId]: pb }),
      {}
    )

    const getOrgHierarchy = (payBeneficiary, acc) => {
      if (!payBeneficiary.parentBenePayId) {
        return [payBeneficiary.beneficiary.businessName, ...acc]
      } else {
        return getOrgHierarchy(
          payBeneficiaryLookupById[payBeneficiary.parentBenePayId],
          [payBeneficiary.beneficiary.businessName, ...acc]
        )
      }
    }

    var logic2 = payBeneficiaries.map((pb) => ({
      orgHierarchy: getOrgHierarchy(pb, []),
    }))
    setCurrLogic("logic2");
    setOutput(logic2);
    toast.success("Logic 2 output rendered successfully")
  }
function getData(event){
if(event==="logic1")
getOrgHierarchyLogic1();
else if(event==="logic2")
getOrgHierarchyLogic2();
else
toast.error("No Action captured");
}
  // replacing componentDidMount
  useEffect(() => {
   // getOrgHierarchyLogic1();
  // getOrgHierarchyLogic2();
  }, []);

  return (
    <>
      <div onClick={()=>{getData('logic1')}} id="logic1" style={{ padding: '10px', background: '#fff', marginBottom: '20px', textAlign: 'center' }}><h2>Logic 1: BeneficiaryPayId and parentBenePayId parent children relationship output </h2></div>
      <div onClick={()=>{getData('logic2')}} id="logic2" style={{ padding: '10px', background: '#fff', marginBottom: '20px', textAlign: 'center' }}><h2>Logic 2: BeneficiaryPayId and parentBenePayId parent children relationship output </h2></div>
      <ProductList>
        {output != null ? output.map((data, index) => {
          return (
            <div style={{ padding: '10px', background: '#fff' }}>
              <h3 style={currLogic==="logic1"?{color:'green'}:{color:'orange'}}>{Object.keys(data)}</h3>
              {data["orgHierarchy"].map((val, key) => {
                return (<p>{val}</p>)
              })
              }
            </div>
          )
        }) : null
        }


      </ProductList>
    </>
  );
}
