const fileElement = document.getElementById("progressfile");
const contentElement = document.getElementById("progresscontent");
const fileSend = document.getElementById("fileSend");

const reader = new window.FileReader()

fileElement.addEventListener("change", handleFiles);
fileSend.addEventListener("click", handlebuttons);

function handlebuttons(event) {
  content = contentElement.value
  const filebuffer = Buffer.from(reader.result);
  console.log(filebuffer);
  
}


function handleFiles(event) {
  const file = event.target.files[0];
  const fileName = event.target.files[0]['name']
  // reader.onloadend = () => {console.log(reader), console.log(file)}
  reader.readAsArrayBuffer(file)
}




'use strict'
const traversePosts = async (cid) => {
  const result = []
  while (cid) {
    result.push(cid)
    const current = await ipfs.dag.get(cid)
    const prev = current.value.prev
    if (prev) {
      cid = prev
    } else {
      return result
    }
  }
}

window.addEventListener("load", async () => {
  if (typeof ipfs === 'undefined') {
    const ipfs = await Ipfs.create({ repo: 'ipfs-' + Math.random() })
    console.log(ipfs)
  }else {
    console.log("이미 있음")
  }
})

//참고용
// const natCid = await ipfs.dag.put({ author: "Nat" })
// const samCid = await ipfs.dag.put({ author: "Sam" })

// const treePostCid = await ipfs.dag.put({
//   content: "trees",
//   author: samCid,
//   tags: ["outdoor", "hobby"]
// })
// const computerPostCid = await ipfs.dag.put({
//   content: "computers",
//   author: natCid,
//   tags: ["hobby"],
//   prev: treePostCid
// })
// const dogPostCid = await ipfs.dag.put({
//   content: "dogs",
//   author: samCid,
//   tags: ["funny", "hobby"],
//   prev: computerPostCid
// })
// const cookPostCid = await ipfs.dag.put({
//   content: "cooks",
//   author: samCid,
//   tags: ["funny", "hobby"],
//   prev: computerPostCid
// })

// const outdoorTagCid = await ipfs.dag.put({
//   tag: "outdoor",
//   posts: [treePostCid]
// })
// const hobbyTagCid = await ipfs.dag.put({
//   tag: "hobby",
//   posts: [treePostCid, computerPostCid, dogPostCid]
// })
// const funnyTagCid = await ipfs.dag.put({
//   tag: "funny",
//   posts: [dogPostCid]
// })

// console.log(traversePosts(dogPostCid))