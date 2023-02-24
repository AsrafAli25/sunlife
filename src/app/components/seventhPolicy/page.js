'use client'

import { Card } from "primereact/card";
import { Button } from "primereact/button";

const SeventhPolicy = () => {
  return (
    <div className="card m-8">
      <Card
        title="Total estimated monthly premium before applicable taxes:"
      >
        <p className="m-0">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
          sed consequuntur error repudiandae numquam deserunt quisquam repellat
          libero asperiores earum nam nobis, culpa ratione quam perferendis
          esse, cupiditate neque quas!
        </p>
        <h2 className="mt-4">All total will print here by using redux or context</h2>
             <div className="card flex mt-5">
          <Button
            label="Apply now"
            type="submit"
          />
        </div>
      </Card>
    </div>
  );
};

export default SeventhPolicy;
