(this["webpackJsonpreact-ts-material-01"]=this["webpackJsonpreact-ts-material-01"]||[]).push([[0],{266:function(t){t.exports=JSON.parse('[{"inputs":[{"internalType":"address","name":"pOwner","type":"address"},{"internalType":"address payable","name":"pProjectWwallet","type":"address"},{"internalType":"address payable","name":"pMarkeetingWallet","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"totalAmount","type":"uint256"}],"name":"FeePayed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint8","name":"plan","type":"uint8"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"NewDeposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"user","type":"address"}],"name":"Newbie","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"referrer","type":"address"},{"indexed":true,"internalType":"address","name":"referral","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"RefBonus","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint8","name":"plan","type":"uint8"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"ReinvestedDeposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdrawn","type":"event"},{"inputs":[],"name":"ADDITIONAL_PERCENT_PLAN_1","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ADDITIONAL_PERCENT_PLAN_2","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ADDITIONAL_PERCENT_PLAN_3","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ADDITIONAL_PERCENT_PLAN_4","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ADDITIONAL_PERCENT_STARTTIME","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"CONTRACT_LONGEVITY_FEE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"CUTOFF_STEP","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"INVEST_MIN_AMOUNT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MARKETING_FEE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PERCENTS_DIVIDER","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PROJECT_FEE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"REFERRAL_PERCENT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"TIME_STEP","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"contractOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getContractBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"plan","type":"uint8"}],"name":"getPlanInfo","outputs":[{"internalType":"uint256","name":"time","type":"uint256"},{"internalType":"uint256","name":"percent","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getSiteInfo","outputs":[{"internalType":"uint256","name":"_totalInvested","type":"uint256"},{"internalType":"uint256","name":"_totalBonus","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"},{"internalType":"uint8","name":"plan","type":"uint8"}],"name":"getUserActiveInvestments","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserAmountOfDeposits","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserAvailable","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"},{"internalType":"uint8","name":"plan","type":"uint8"}],"name":"getUserCheckpoint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserCutoff","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"getUserDepositInfo","outputs":[{"internalType":"uint8","name":"plan","type":"uint8"},{"internalType":"uint256","name":"percent","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"start","type":"uint256"},{"internalType":"uint256","name":"finish","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserDividendsAfterTAX","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"},{"internalType":"int8","name":"plan","type":"int8"}],"name":"getUserDividendsAfterTAX","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserDividendsBeforeTAX","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"},{"internalType":"int8","name":"plan","type":"int8"}],"name":"getUserDividendsBeforeTAX","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserInfo","outputs":[{"internalType":"uint256","name":"totalDeposit","type":"uint256"},{"internalType":"uint256","name":"totalWithdrawn","type":"uint256"},{"internalType":"uint256","name":"totalReferrals","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserReferralBonusAfterTax","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserReferralBonusBeforeTax","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserReferralTotalBonus","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserReferralWithdrawn","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserReferrer","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserTotalDeposits","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserTotalReferrals","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserTotalWithdrawn","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"referrer","type":"address"},{"internalType":"uint8","name":"plan","type":"uint8"}],"name":"invest","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"marketingWallet","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"projectWallet","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"plan","type":"uint8"}],"name":"reinvest","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"value","type":"uint256"}],"name":"setAdditionalPercent_Plan1","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"value","type":"uint256"}],"name":"setAdditionalPercent_Plan2","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"value","type":"uint256"}],"name":"setAdditionalPercent_Plan3","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"value","type":"uint256"}],"name":"setAdditionalPercent_Plan4","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"value","type":"uint256"}],"name":"setCUTOFF_STEP","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"value","type":"uint256"}],"name":"set_CONTRACT_LONGEVITY_FEE","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"value","type":"uint256"}],"name":"set_INVEST_MIN_AMOUNT","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"value","type":"uint256"}],"name":"set_MARKETING_FEE","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"value","type":"uint256"}],"name":"set_PROJECT_FEE","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"plan","type":"uint8"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"set_PlanMinInvest","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"plan","type":"uint8"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"set_PlanPercent","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"plan","type":"uint8"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"set_PlanTime","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"value","type":"uint256"}],"name":"set_REFERRAL_PERCENT","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"value","type":"address"}],"name":"set_marketingWallet","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"value","type":"address"}],"name":"set_projectWallet","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"started","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalInvested","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalReInvested","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalRefBonus","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]')},284:function(t,e,n){},285:function(t,e,n){},299:function(t,e){},301:function(t,e){},303:function(t,e){},307:function(t,e){},334:function(t,e){},336:function(t,e){},345:function(t,e){},347:function(t,e){},357:function(t,e){},359:function(t,e){},481:function(t,e){},483:function(t,e){},490:function(t,e){},491:function(t,e){},585:function(t,e,n){"use strict";n.r(e);var a=n(0),i=n.n(a),s=n(54),o=n.n(s),r=(n(284),n(155)),u=(n(285),n(5)),l=n(627),c=n(633),d=n(629),p=n(630),y=n(12),m=n(21),f=n(20),b=n(624),w=n(631),x=n(634),h=n(632),j=n(625),v=n(111),T=n.n(v);function g(t){return t=T.a.utils.fromWei(t),new Intl.NumberFormat("en-GB",{maximumSignificantDigits:2}).format(parseFloat(t))}function O(t){return new Intl.NumberFormat("en-GB",{maximumSignificantDigits:2}).format(parseFloat(t))}var A=n.p+"static/media/bnbfarm-glow.6c1f1fc1.png",I=n(1),M=(d.a,function(t){Object(m.a)(n,t);var e=Object(f.a)(n);function n(t){var a;return Object(y.a)(this,n),(a=e.call(this,t)).label=void 0,a.percentage=void 0,a.days=void 0,a.minInvest=void 0,a.planIndex=void 0,a.labelNode=void 0,a.summaryNode=void 0,a.amountInput=void 0,a.withdrawTax=25,a.state={disabled:!1,balance:"0",readyForPayout:"0",reinvestPossible:!1},a.componentDidMount=function(){a.calcROI(),a.checkState(),setInterval(a.checkState,5e3)},a.componentWillUnmount=function(){},a.checkState=function(){a.setState({disabled:!window.connected}),!0===window.connected&&(window.farm_contract.methods.getUserActiveInvestments(window.walletAddress,a.planIndex).call().then((function(t){a.setState({balance:t})})).catch((function(t){console.log(t)})),window.farm_contract.methods.getUserDividendsAfterTAX(window.walletAddress,a.planIndex).call().then((function(t){a.setState({readyForPayout:t}),parseFloat(window.web3.utils.fromWei(t))>0&&a.setState({reinvestPossible:!0})})).catch((function(t){console.log(t)})))},a.calcROI=function(){if(null!=a.summaryNode.current){var t=a.percentage*a.days*(100-a.withdrawTax)/100;if(a.summaryNode.current.innerText=O(t)+"% ROI",null!=a.amountInput.current){var e=a.days*(parseFloat(a.amountInput.current.value)/100*a.percentage)*(100-a.withdrawTax)/100;a.summaryNode.current.innerHTML=a.summaryNode.current.innerHTML+"<br>"+O(e)+" BNB after "+a.days+" days."}}},a.onChange_Amount=function(){a.calcROI()},a.onClick_Invest=function(){if(a.amountInput.current){var t=window.refferalAddress;window.web3.utils.isAddress(t)||(t=window.walletAddress),console.log("this.planIndex",a.planIndex),window.farm_contract.methods.invest(t,a.planIndex).send({value:window.web3.utils.toWei(a.amountInput.current.value),from:window.walletAddress}).then((function(t){})).catch((function(t){console.log(t)}))}},a.onClick_ReInvest=function(){window.farm_contract.methods.reinvest(a.planIndex).send({from:window.walletAddress}).catch((function(t){console.log(t)}))},a.render=function(){var t;return Object(I.jsxs)(w.a,{sx:{minWidth:275},children:[Object(I.jsxs)(h.a,{children:[Object(I.jsx)("img",{style:{width:"35%",float:"left",marginRight:"16px",marginBottom:"16px"},src:A}),Object(I.jsx)(c.a,{ref:a.labelNode,sx:{fontSize:20},color:"text.primary",gutterBottom:!0,children:a.label}),Object(I.jsxs)(c.a,{sx:{fontSize:16},color:"text.secondary",gutterBottom:!0,children:[a.percentage,"% ",a.days," Days"]}),Object(I.jsxs)(c.a,{sx:{mb:1.5},color:"text.primary",children:["active invest: ",g(a.state.balance)," BNB"]}),Object(I.jsxs)(c.a,{sx:{mb:1.5},color:"text.primary",children:["available: ",g(a.state.readyForPayout)," BNB"]}),Object(I.jsx)(c.a,{variant:"h2",children:Object(I.jsx)(b.a,{inputRef:a.amountInput,label:"amount",type:"number",onChange:a.onChange_Amount,defaultValue:null===(t=a.minInvest)||void 0===t?void 0:t.toFixed(3),fullWidth:!0})}),Object(I.jsxs)(c.a,{variant:"body2",sx:{fontSize:14},color:"text.secondary",children:["Min ",O(a.minInvest.toString())," BNB"]}),Object(I.jsx)(j.a,{sx:{my:1},disabled:a.state.disabled,size:"large",variant:"contained",onClick:a.onClick_Invest,fullWidth:!0,children:"Invest"}),Object(I.jsx)(j.a,{color:"secondary",sx:{my:1},disabled:!a.state.reinvestPossible,size:"large",variant:"contained",onClick:a.onClick_ReInvest,fullWidth:!0,children:"Reinvest"}),Object(I.jsx)(c.a,{style:{marginTop:"16px"},ref:a.summaryNode,variant:"body2",sx:{fontSize:16},color:"text.secondary",gutterBottom:!0})]}),Object(I.jsx)(x.a,{children:Object(I.jsxs)(c.a,{sx:{fontSize:12},color:"text.secondary",children:["* the calculation considers ",a.withdrawTax,"% tax (5% for marketing and 20% will stay in contract for longevity)"]})})]})},a.labelNode=i.a.createRef(),a.summaryNode=i.a.createRef(),a.amountInput=i.a.createRef(),a.percentage=t.percentage,a.days=t.days,a.label=t.label,a.minInvest=t.minInvest,a.planIndex=t.planIndex,a}return n}(i.a.Component)),B=(d.a,function(t){Object(m.a)(n,t);var e=Object(f.a)(n);function n(t){var a;return Object(y.a)(this,n),(a=e.call(this,t)).state={userInfo:{totalDeposit:"0",totalReferrals:"0",totalWithdrawn:"0"},balance:"",referralBonus:"",availableForWithdraw:"",timeLeftUntilFull:""},a.baseState=void 0,a.myBalanceNode=void 0,a.componentDidMount=function(){a.checkState(),setInterval(a.checkState,5e3)},a.componentWillUnmount=function(){},a.onClick_Withdraw=function(){window.farm_contract.methods.withdraw().send({from:window.walletAddress}).catch((function(t){console.log(t)}))},a.checkState=function(){!0===window.connected?(window.farm_contract.methods.getUserInfo(window.walletAddress).call().then((function(t){a.setState({userInfo:t})})).catch((function(t){console.log(t)})),window.web3.eth.getBalance(window.walletAddress).then((function(t){a.setState({balance:t})})).catch((function(t){console.log(t)})),window.farm_contract.methods.getUserReferralBonusAfterTax(window.walletAddress).call().then((function(t){a.setState({referralBonus:t})})).catch((function(t){console.log(t)})),window.farm_contract.methods.getUserDividendsAfterTAX(window.walletAddress,-1).call().then((function(t){a.setState({availableForWithdraw:t})})).catch((function(t){console.log(t)})),window.farm_contract.methods.getUserCutoff(window.walletAddress).call().then((function(t){var e=(new Date(1e3*parseInt(t)).getTime()-(new Date).getTime())/1e3/60/60,n=new Intl.NumberFormat("en-GB").format(e);e<=0&&(n="0"),a.setState({timeLeftUntilFull:n})})).catch((function(t){console.log(t)}))):a.setState(a.baseState)},a.render=function(){return Object(I.jsxs)(w.a,{sx:{minWidth:275},children:[Object(I.jsx)(h.a,{children:Object(I.jsxs)(l.a,{container:!0,children:[Object(I.jsxs)(l.a,{item:!0,xs:12,md:6,children:[Object(I.jsx)(c.a,{sx:{fontSize:16},color:"text.secondary",gutterBottom:!0,children:"my wallet"}),Object(I.jsxs)(c.a,{ref:a.myBalanceNode,sx:{fontSize:20},color:"text.primary",gutterBottom:!0,children:[g(a.state.balance)," BNB"]})]}),Object(I.jsxs)(l.a,{item:!0,xs:12,md:6,children:[Object(I.jsx)(c.a,{sx:{fontSize:16},color:"text.secondary",gutterBottom:!0,children:"deposits"}),Object(I.jsxs)(c.a,{sx:{fontSize:20},color:"text.primary",gutterBottom:!0,children:[g(a.state.userInfo.totalDeposit)," BNB"]})]}),Object(I.jsxs)(l.a,{item:!0,xs:12,md:6,children:[Object(I.jsx)(c.a,{sx:{fontSize:16},color:"text.secondary",gutterBottom:!0,children:"withdrawn"}),Object(I.jsxs)(c.a,{sx:{fontSize:20},color:"text.primary",gutterBottom:!0,children:[g(a.state.userInfo.totalWithdrawn)," BNB"]})]}),Object(I.jsxs)(l.a,{item:!0,xs:12,md:6,children:[Object(I.jsx)(c.a,{sx:{fontSize:16},color:"text.secondary",gutterBottom:!0,children:"Referral Bonus"}),Object(I.jsxs)(c.a,{sx:{fontSize:20},color:"text.primary",gutterBottom:!0,children:[g(a.state.referralBonus)," BNB"]})]}),Object(I.jsxs)(l.a,{item:!0,xs:12,md:6,children:[Object(I.jsx)(c.a,{sx:{fontSize:16},color:"text.secondary",gutterBottom:!0,children:"available for withdraw"}),Object(I.jsxs)(c.a,{sx:{fontSize:20},color:"text.primary",gutterBottom:!0,children:[g(a.state.availableForWithdraw)," BNB"]})]}),Object(I.jsxs)(l.a,{item:!0,xs:12,md:6,children:[Object(I.jsx)(c.a,{sx:{fontSize:16},color:"text.secondary",gutterBottom:!0,children:"claim within *"}),Object(I.jsxs)(c.a,{sx:{fontSize:20},color:"text.primary",gutterBottom:!0,children:[a.state.timeLeftUntilFull," hours"]})]}),Object(I.jsx)(l.a,{item:!0,xs:12,md:6,children:Object(I.jsx)(j.a,{sx:{my:1},size:"large",variant:"contained",onClick:a.onClick_Withdraw,children:"Withdraw"})}),Object(I.jsx)(l.a,{item:!0,xs:12,md:6,children:Object(I.jsx)(c.a,{sx:{fontSize:12},color:"text.secondary",gutterBottom:!0,children:"* everyone has to pay out their profits within this period. if the timer goes to 0, the profits will not continue to increase until a payout or reinvest takes place"})})]})}),Object(I.jsx)(x.a,{})]})},a.baseState=a.state,a.myBalanceNode=i.a.createRef(),a}return n}(i.a.Component)),_=(d.a,function(t){Object(m.a)(n,t);var e=Object(f.a)(n);function n(t){var a;return Object(y.a)(this,n),(a=e.call(this,t)).state={contractBalance:"",totalInvested:"",totalReinvested:""},a.baseState=void 0,a.componentDidMount=function(){a.checkState(),setInterval(a.checkState,5e3)},a.componentWillUnmount=function(){},a.onClick_Withdraw=function(){window.farm_contract.methods.withdraw().send({from:window.walletAddress}).catch((function(t){console.log(t)}))},a.onClick_VerifiedContract=function(){var t=document.createElement("a");t.target="_blank",t.href="https://testnet.bscscan.com/address/"+window.contractAddress+"#code",t.click()},a.checkState=function(){!0===window.connected?(window.farm_contract.methods.totalInvested().call().then((function(t){a.setState({totalInvested:t})})).catch((function(t){console.log(t)})),window.farm_contract.methods.getContractBalance().call().then((function(t){a.setState({contractBalance:t})})).catch((function(t){console.log(t)})),window.farm_contract.methods.totalReInvested().call().then((function(t){a.setState({totalReinvested:t})})).catch((function(t){console.log(t)}))):a.setState(a.baseState)},a.render=function(){return Object(I.jsxs)(w.a,{sx:{minWidth:275},children:[Object(I.jsx)(h.a,{children:Object(I.jsxs)(l.a,{container:!0,children:[Object(I.jsxs)(l.a,{item:!0,xs:12,md:6,children:[Object(I.jsx)(c.a,{sx:{fontSize:16},color:"text.secondary",gutterBottom:!0,children:"total invested"}),Object(I.jsxs)(c.a,{sx:{fontSize:20},color:"text.primary",gutterBottom:!0,children:[g(a.state.totalInvested)," BNB"]})]}),Object(I.jsxs)(l.a,{item:!0,xs:12,md:6,children:[Object(I.jsx)(c.a,{sx:{fontSize:16},color:"text.secondary",gutterBottom:!0,children:"contract balance"}),Object(I.jsxs)(c.a,{sx:{fontSize:20},color:"text.primary",gutterBottom:!0,children:[g(a.state.contractBalance)," BNB"]})]}),Object(I.jsxs)(l.a,{item:!0,xs:12,md:6,children:[Object(I.jsx)(c.a,{sx:{fontSize:16},color:"text.secondary",gutterBottom:!0,children:"total reinvested"}),Object(I.jsxs)(c.a,{sx:{fontSize:20},color:"text.primary",gutterBottom:!0,children:[g(a.state.totalReinvested)," BNB"]})]})]})}),Object(I.jsx)(x.a,{children:Object(I.jsx)(j.a,{sx:{my:1},size:"small",onClick:a.onClick_VerifiedContract,children:"Verified Contract"})})]})},a.baseState=a.state,a}return n}(i.a.Component)),S=function(t){Object(m.a)(n,t);var e=Object(f.a)(n);function n(t){var a;return Object(y.a)(this,n),(a=e.call(this,t)).componentDidMount=function(){a.handleConnectWallet()},a.componentWillUnmount=function(){},a.initialConnect=function(){if(window.ethereum)window.ethereum.request({method:"eth_requestAccounts"}).then((function(t){t.length>=1&&(window.connected=!0,window.walletAddress=t[0],a.handleConnectWallet())}));else if(window.confirm("You have to use MetaMask or TrustWallet to connect. Press OK to continue to the MetaMask download page. https://metamask.io/download")){var t=document.createElement("a");t.target="_blank",t.href="https://metamask.io/download",t.click()}},a.handleConnectWallet=function(){window.ethereum&&(window.web3=new T.a(window.ethereum),window.ethereum.request({method:"eth_accounts"}).then((function(t){t.length>=1&&(window.connected=!0,window.walletAddress=t[0],a.updateRefLink(),a.forceUpdate(),window.farm_contract=new window.web3.eth.Contract(window.contract_abi,window.contractAddress))})))},a.handleDeactivateAccount=function(){window.connected=!1,window.walletAddress="",a.forceUpdate()},a.updateRefLink=function(){var t=document.getElementById("walletAddressRefLink");null!=t&&(t.innerText=window.walletAddress)},a.render=function(){var t;return t=window.connected?Object(I.jsx)(j.a,{variant:"contained",onClick:a.handleDeactivateAccount,children:"disconnect"}):Object(I.jsx)(j.a,{variant:"contained",onClick:a.initialConnect,children:"connect"}),Object(I.jsxs)(d.a,{children:[Object(I.jsx)("div",{children:window.walletAddress&&"".concat(window.walletAddress.slice(0,6),"...").concat(window.walletAddress.slice(window.walletAddress.length-4,window.walletAddress.length))}),Object(I.jsx)("div",{style:{padding:"16px 0 16px 0"},children:t})]})},a}return n}(i.a.Component),N=n.p+"static/media/bnbfarm-header-text.752073f3.png",R=n(266),C=Object(u.a)(p.a)((function(t){var e=t.theme;return Object(r.a)(Object(r.a)({},e.typography.h3),{},{padding:e.spacing(1),textAlign:"center",color:e.palette.text.secondary})}));var E=function(){window.contractAddress="0x5dcE1204509689830F20f6300bFfdCB1814BDdbe",window.contract_abi=R;var t=new URLSearchParams(window.location.search).get("ref");return null!=t&&(window.refferalAddress=t),Object(I.jsx)(d.a,{sx:{flexGrow:1},style:{width:"80%",margin:"auto",marginTop:"32px"},children:Object(I.jsxs)(l.a,{container:!0,spacing:2,children:[Object(I.jsxs)(l.a,{item:!0,xs:12,children:[Object(I.jsx)(C,{sx:{display:{xs:"block",md:"none"}},className:"flex-middle-center",children:Object(I.jsx)("div",{className:"flex-middle-center",children:Object(I.jsx)("img",{style:{width:"100%"},src:N})})}),Object(I.jsx)(C,{sx:{display:{xs:"none",md:"block"}},children:Object(I.jsxs)("div",{className:"flex-middle-center",children:[Object(I.jsx)("img",{style:{width:"10%"},src:A}),Object(I.jsx)("img",{style:{width:"80%"},src:N})]})})]}),Object(I.jsx)(l.a,{item:!0,xs:12,md:4,children:Object(I.jsxs)(p.a,{style:{padding:"16px"},children:[Object(I.jsx)(S,{}),Object(I.jsx)(c.a,{sx:{fontSize:16},color:"text.secondary",gutterBottom:!0,children:"referral link"}),Object(I.jsxs)(c.a,{sx:{fontSize:16},style:{wordBreak:"break-all"},color:"text.primary",gutterBottom:!0,children:[window.location.origin,"?ref=",Object(I.jsx)("span",{id:"walletAddressRefLink"})]}),Object(I.jsx)(c.a,{sx:{fontSize:12},color:"text.secondary",gutterBottom:!0,children:"For the friends that you invite you receive 5% of their deposits."})]})}),Object(I.jsx)(l.a,{item:!0,xs:12,md:4,children:Object(I.jsx)(_,{})}),Object(I.jsx)(l.a,{item:!0,xs:12,md:4,children:Object(I.jsx)(B,{})}),Object(I.jsx)(l.a,{item:!0,xs:12,md:3,children:Object(I.jsx)(M,{label:"Plan 1",minInvest:.05,percentage:23,days:7,planIndex:0})}),Object(I.jsx)(l.a,{item:!0,xs:12,md:3,children:Object(I.jsx)(M,{label:"Plan 2",minInvest:.05,percentage:7,days:30,planIndex:1})}),Object(I.jsx)(l.a,{item:!0,xs:12,md:3,children:Object(I.jsx)(M,{label:"Plan 3",minInvest:.05,percentage:5,days:50,planIndex:2})}),Object(I.jsx)(l.a,{item:!0,xs:12,md:3,children:Object(I.jsx)(M,{label:"VIP Plan",minInvest:1.5,percentage:32,days:5,planIndex:3})})]})})},k=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,635)).then((function(e){var n=e.getCLS,a=e.getFID,i=e.getFCP,s=e.getLCP,o=e.getTTFB;n(t),a(t),i(t),s(t),o(t)}))},P=n(267),D=n(628),U=Object(P.a)({palette:{mode:"dark"}});o.a.render(Object(I.jsx)(i.a.StrictMode,{children:Object(I.jsx)(D.a,{theme:U,children:Object(I.jsx)(E,{})})}),document.getElementById("root")),k()}},[[585,1,2]]]);
//# sourceMappingURL=main.f17d68c0.chunk.js.map