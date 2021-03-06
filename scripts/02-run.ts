import { Signer } from "ethers";
import { ethers } from "hardhat";
var daiToken = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

const main = async () => {
  let accounts: Signer[];
  accounts = await ethers.getSigners();

  const tokenFactory = await ethers.getContractFactory("PDAOToken");
  const PrizeDAOFactory = await ethers.getContractFactory("PrizeDAOGovernor");

  const tokenContract = await tokenFactory.deploy();
  await tokenContract.deployed();
  console.log("tokenContract", tokenContract.address);
  console.log("[LOG] Token contract deployed");

  await tokenContract.delegate(accounts[0].getAddress());

  const PrizeDAOGovernorContract = await PrizeDAOFactory.deploy(
    tokenContract.address,
    "PrizeDAOGovernor",
    daiToken
  );
  await PrizeDAOGovernorContract.deployed();
  console.log("PrizeDAOGovernor address", PrizeDAOGovernorContract.address);

//   var txn = await PrizeDAOGovernorContract.receiveEthForTransactions({
//     value: ethers.utils.parseEther("1"),
//   });

//   await txn.wait();

//   var txn = await tokenContract.setMinterRole(PrizeDAOGovernorContract.address);
//   await txn.wait();

  // var signer: Signer = ethers.provider.getSigner();
  // var address = await accounts[0].getAddress();
  // console.log("address", address);

  

  // const transferCalldata = PrizeDAOGovernorContract.interface.encodeFunctionData(
  //   "setWinnerAddress",
  //   ["#1"]
  // );

  // var txn = await PrizeDAOGovernorContract.propose(
  //   [PrizeDAOGovernorContract.address],
  //   [0],
  //   [transferCalldata],
  //   "Proposal #1: Give grant to team"
  // );
  // var rc = await txn.wait();
  // const event = rc.events.find(
  //   (event: any) => event.event === "ProposalCreated"
  // );
  // const [proposalId] = event.args;

  // var name = await PrizeDAOGovernorContract.name();
  // console.log("name : ", name);

  // var version = await PrizeDAOGovernorContract.version();
  // console.log("version : ", version);

  // var countingMode = await PrizeDAOGovernorContract.COUNTING_MODE();
  // console.log("countingMode : ", countingMode);

  // var votingDelay = await PrizeDAOGovernorContract.votingDelay();
  // console.log("votingDelay : ", votingDelay);

  // var votingPeriod = await PrizeDAOGovernorContract.votingPeriod();
  // console.log("votingPeriod : ", votingPeriod);

  // var proposalSnapshot = await PrizeDAOGovernorContract.proposalSnapshot(proposalId);
  // console.log("proposalSnapshot : ", proposalSnapshot);

  // var proposalDeadline = await PrizeDAOGovernorContract.proposalDeadline(proposalId);
  // console.log("proposalDeadline : ", proposalDeadline);

  // var blockNum = await ethers.provider.getBlockNumber();
  // var quorum = await PrizeDAOGovernorContract.quorum(blockNum - 1);
  // console.log("quorum : ", quorum);

  // var getVotes = await PrizeDAOGovernorContract.getVotes(
  //   accounts[0].getAddress(),
  //   blockNum - 1
  // );
  // console.log("accounts[1].getAddress(),", accounts[1].getAddress());
  // console.log("getVotes[0] : ", getVotes);

  // var getVotes2 = await PrizeDAOGovernorContract.getVotes(
  //   accounts[1].getAddress(),
  //   blockNum - 1
  // );
  // console.log("getVotes[1] : ", getVotes2);

  // var txn = await PrizeDAOGovernorContract.castVote(proposalId, 1);
  // var rc = await txn.wait();
  // const voteEvent = rc.events.find((event: any) => event.event === "VoteCast");
  // console.log("voteEvent : ", voteEvent.args);

  // var blockNum = await ethers.provider.getBlockNumber();
  // console.log("blockNum", blockNum);
  // await sleep(3000);
  // var state = await PrizeDAOGovernorContract.state(proposalId);
  // console.log("state : ", state);

  // await sleep(1 * 60 * 1000);
  // var hasVoted = await PrizeDAOGovernorContract.hasVoted(
  //   proposalId,
  //   accounts[0].getAddress()
  // );
  // console.log("hasVoted : ", hasVoted);

  // var blockNum = await ethers.provider.getBlockNumber();
  // console.log("blockNum", blockNum);
  // var proposalVotes = await PrizeDAOGovernorContract.proposalVotes(proposalId);
  // console.log("proposalVotes : ", proposalVotes);

  // var state = await PrizeDAOGovernorContract.state(proposalId);
  // console.log("state : ", state);

  // if (state === 4) {
  //   var res = await PrizeDAOGovernorContract.execute(
  //     [PrizeDAOGovernorContract.address],
  //     [0],
  //     [transferCalldata],
  //     ethers.utils.keccak256(
  //       ethers.utils.toUtf8Bytes("Proposal #1: Give grant to team")
  //     )
  //   );
  //   console.log("res", res);
  //   await sleep(1000);
  //   var userAdd = await PrizeDAOGovernorContract.acceptedProposal("#1");
  //   var txn = await PrizeDAOGovernorContract.disburseIncentive("#1", userAdd, 20);
  //   await txn.wait();
  //   console.log("userAdd", userAdd);
  // }
};

function sleep(time: number | undefined) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (err) {
    console.log(`err`, err);
    process.exit(1);
  }
};

runMain();

// enum ProposalState {
//   Pending,
//   Active,
//   Canceled,
//   Defeated,
//   Succeeded,
//   Queued,
//   Expired,
//   Executed
// }
