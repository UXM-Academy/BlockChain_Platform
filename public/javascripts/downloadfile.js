let IPFS;

const ipfs = new IPFS.create();

async function downloadfile(ipfs_hash, ipfs_type) {
  const chunks = [];
  for await (chunk of ipfs.cat("ipfs/" + ipfs_hash)) {
    chunks.push(chunk);
  }
  const b64 = chunks[0].toString("base64");
  const b64src = `data:${ipfs_type};base64,${b64}`;

  document.getElementById("");
}

function showfile(ipfs_hash, ipfs_type) {}
