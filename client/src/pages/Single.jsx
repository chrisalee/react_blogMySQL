import React from 'react';
import { Link } from 'react-router-dom';
import Menu from '../components/Menu';

const Single = () => {
  return (
    <div className='single'>
      <div className="content">
        <img src='https://images.pexels.com/photos/59988/dog-puppy-animal-portrait-small-dog-59988.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt="" />
        <div className="user">
          <img src="https://images.pexels.com/photos/9597975/pexels-photo-9597975.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
          <div className="info">
            <span>Trump</span>
            <p>posted 2024 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?=id`} className='edit--btns'>
              <iconify-icon icon="entypo:edit"></iconify-icon>
            </Link>
            <p className='edit--btns'>
              <iconify-icon icon="fluent:delete-48-regular"></iconify-icon>
            </p>
          </div>
        </div>
        <h1>Lorem Dolor  maiores facere vitae in voluptate, repudiandae doloremque tempora. Harum.</h1>
        <p className='user__desc'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi, facilis nisi, pariatur tempora dolore culpa, animi quam tenetur eaque repellat quasi debitis officia iure dignissimos? Quo exercitationem aliquam vitae illo.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque, minima? Sed nemo aliquam voluptas accusantium consequatur reprehenderit saepe aperiam culpa. Exercitationem temporibus, aliquam id ullam aut magni in libero ad!
          <br />
          <br />
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi illum consequatur iusto obcaecati alias consectetur qui quis architecto nesciunt sequi atque, officia adipisci ab ex, dignissimos repudiandae deleniti et temporibus?  
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos libero ab, dolores dicta accusamus minus odio deserunt unde, illo repudiandae nihil id nulla incidunt aliquid excepturi commodi tempora modi consectetur?
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi, facilis nisi, pariatur tempora dolore culpa, animi quam tenetur eaque repellat quasi debitis officia iure dignissimos? Quo exercitationem aliquam vitae illo.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque, minima? Sed nemo aliquam voluptas accusantium consequatur reprehenderit saepe aperiam culpa. Exercitationem temporibus, aliquam id ullam aut magni in libero ad!
          <br />
          <br />
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi illum consequatur iusto obcaecati alias consectetur qui quis architecto nesciunt sequi atque, officia adipisci ab ex, dignissimos repudiandae deleniti et temporibus?  
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos libero ab, dolores dicta accusamus minus odio deserunt unde, illo repudiandae nihil id nulla incidunt aliquid excepturi commodi tempora modi consectetur?
          <br />
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi, facilis nisi, pariatur tempora dolore culpa, animi quam tenetur eaque repellat quasi debitis officia iure dignissimos? Quo exercitationem aliquam vitae illo.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque, minima? Sed nemo aliquam voluptas accusantium consequatur reprehenderit saepe aperiam culpa. Exercitationem temporibus, aliquam id ullam aut magni in libero ad!
          <br />
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi illum consequatur iusto obcaecati alias consectetur qui quis architecto nesciunt sequi atque, officia adipisci ab ex, dignissimos repudiandae deleniti et temporibus?  
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos libero ab, dolores dicta accusamus minus odio deserunt unde, illo repudiandae nihil id nulla incidunt aliquid excepturi commodi tempora modi consectetur?
          <br />
          <br />
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi illum consequatur iusto obcaecati alias consectetur qui quis architecto nesciunt sequi atque, officia adipisci ab ex, dignissimos repudiandae deleniti et temporibus?  
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos libero ab, dolores dicta accusamus minus odio deserunt unde, illo repudiandae nihil id nulla incidunt aliquid excepturi commodi tempora modi consectetur?
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi, facilis nisi, pariatur tempora dolore culpa, animi quam tenetur eaque repellat quasi debitis officia iure dignissimos? Quo exercitationem aliquam vitae illo.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque, minima? Sed nemo aliquam voluptas accusantium consequatur reprehenderit saepe aperiam culpa. Exercitationem temporibus, aliquam id ullam aut magni in libero ad!
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam corporis doloribus expedita ipsa, iure voluptate cum voluptates et maxime incidunt accusantium natus eius voluptatum tempora iusto possimus veritatis quibusdam ab.
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam corporis doloribus expedita ipsa, iure voluptate cum voluptates et maxime incidunt accusantium natus eius voluptatum tempora iusto possimus veritatis quibusdam ab.
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam corporis doloribus expedita ipsa, iure voluptate cum voluptates et maxime incidunt accusantium natus eius voluptatum tempora iusto possimus veritatis quibusdam ab.
        </p>
      </div>
      <div className="menu">
        <Menu />
      </div>
    </div>
  )
}

export default Single