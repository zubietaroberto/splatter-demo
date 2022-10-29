import { BigNumber } from 'ethers';
import { defaultAbiCoder } from 'ethers/lib/utils';
import { useEffect, useState } from 'react';
import { LensHub__factory } from '../../typechain-types';
import { LENS_HUB_ADDRESS, useContract } from './hooks';

const freeCollectModuleAddr = '0xD6C850aeBFDC46D7F4c207e445cC0d6B0919BDBe';
const HARDCODED_HANDLE = 'zer0dot';
const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000';

interface Post {
  text: string;
  profileId: BigNumber;
  postId: BigNumber;
}

export function Timeline() {
  const [address, setAddress] = useState<string | null>();
  const [profileId, setProfileId] = useState<BigNumber | null>();
  const [posts, setPosts] = useState<Post[]>([]);

  const [input, setInput] = useState<string>('');
  const { lensContract, signer } = useContract();

  useEffect(() => {
    async function getAddress() {
      if (!signer) return;
      const address = await signer.getAddress();
      setAddress(address);
    }

    getAddress();
  }, [signer, setAddress]);

  useEffect(() => {
    async function getProfileId() {
      if (!lensContract) return;
      const id = await lensContract.getProfileIdByHandle(HARDCODED_HANDLE);
      setProfileId(id);
    }

    getProfileId();
  }, [lensContract]);

  useEffect(() => {
    async function getPosts() {
      if (!profileId || !signer) return;

      const localcontract = LensHub__factory.connect(LENS_HUB_ADDRESS, signer);
      const count = await localcontract.getPubCount(profileId);
      const pub = await localcontract.getPub(profileId, count);

      setPosts([
        {
          postId: count,
          profileId,
          text: pub.contentURI,
        },
      ]);
    }

    getPosts();
  }, [signer, profileId]);

  async function post() {
    if (!profileId || !input || !signer) {
      alert('No Contract or Profile or Input!');
      return;
    }

    const contentURI = input;
    const contract = LensHub__factory.connect(LENS_HUB_ADDRESS, signer);
    return contract.connect(signer).post(
      {
        profileId,
        contentURI,
        collectModule: freeCollectModuleAddr,
        collectModuleInitData: defaultAbiCoder.encode(['bool'], [true]),
        referenceModule: ZERO_ADDRESS,
        referenceModuleInitData: [],
      },
      { gasLimit: '1000000' }
    );
  }

  return (
    <div>
      <h1>SPLATTER</h1>
      {address && <div>Your address is {address}</div>}
      <hr />
      <h2>Profile</h2>
      <b>{`Username: ${HARDCODED_HANDLE}`}</b>
      {profileId && <div>{`User ID: ${profileId.toString()}`}</div>}
      {posts.map((p) => {
        return (
          <div key={p.postId.toString()}>
            <hr />
            <h2>Splat:</h2>
            <div>
              <b>Blockchain says: </b>
              {p.text}
            </div>
          </div>
        );
      })}

      <div>
        <hr />
        <h2>New Post</h2>
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <button onClick={post}>Splatter It!</button>
      </div>
    </div>
  );
}
