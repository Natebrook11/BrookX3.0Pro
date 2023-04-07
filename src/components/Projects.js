import React from "react";
import Card from "./CardComp";
import "./ProjectGrid.css";

function CardSplitHovers() {
  return (
    <div>
      <main id="main">
        <Card
          imageUrl="https://images.unsplash.com/photo-1535498730771-e735b998cd64?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          imageAlt="A City skyline at sunset"
          title="The City"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos excepturi nostrum necessitatibus doloremque? Quasi non molestias odio. Quasi non molestias odio."
        />
        <Card
          imageUrl="https://images.unsplash.com/photo-1586500036706-41963de24d8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          imageAlt="A Beach"
          title="The Beach"
          description="Quasi non molestias odio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos excepturi nostrum necessitatibus doloremque? Quasi non molestias odio."
        /><Card
          imageUrl="https://images.unsplash.com/photo-1586500036706-41963de24d8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          imageAlt="A Beach"
          title="The Beach"
          description="Quasi non molestias odio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos excepturi nostrum necessitatibus doloremque? Quasi non molestias odio."
        /><Card
          imageUrl="https://images.unsplash.com/photo-1586500036706-41963de24d8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          imageAlt="A Beach"
          title="The Beach"
          description="Quasi non molestias odio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos excepturi nostrum necessitatibus doloremque? Quasi non molestias odio."
        />
      </main>
    </div>
  );
}

export default CardSplitHovers;
