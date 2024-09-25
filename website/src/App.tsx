import { ChangeEvent, useState } from 'react';
import { Button } from '@hoang/ui';
import { add } from '@hoang/utils';

import {MyText} from "@/Text"
function App() {
  const [nums, setNums] = useState({
    a: '',
    b: '',
  });

  const handleNumChange =
    (key: keyof typeof nums) => (e: ChangeEvent<HTMLInputElement>) => {
      setNums((prevNums) => ({
        ...prevNums,
        [key]: e.target.value,
    }));
    };

  return (
    <>
      <input type="text" value={nums.a} onChange={handleNumChange('a')} />
      <input type="text" value={nums.b} onChange={handleNumChange('b')} />
      <Button
        onClick={() => {
          console.log(add(Number(nums.a), Number(nums.b)));
        }}
      >
        Add
      </Button>

      <MyText
        onClick={() => {
          console.log(add(Number(nums.a), Number(nums.b)));
        }}
      >
        Add
      </MyText>
    </>
  );
}

export default App;