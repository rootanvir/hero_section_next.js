import React, { FC } from 'react';
import Image from "next/image";
interface Props {
  
}

const HomeSection: FC<Props> = ({  }) => {
  return (
    <div>
        <div>
            <div>
                <p>Keep Scaling up your  skills during online situation</p>
            </div>
            <div>
                <Image 
                    src="/assets/images/learning.jpg"
                    alt="Learnig image"
                    width={400}
                    height={400}
                />
            </div>
        </div>
        <div>

        </div>
    </div>
  );
};

export default HomeSection;