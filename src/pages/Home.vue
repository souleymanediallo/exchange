<template>
  <div id="exchange">
    <Navbar 
    :title="brandName"
    :items="menuItems"
    />
    <Hero />
    <ExchangeList 
    :exchanges="exchanges"
    />
    <Pagination />
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Hero from '../components/Hero.vue'
import ExchangeList from '../components/ExchangeList.vue'
import Pagination from '../components/Pagination.vue'

export default {
  name: 'HomeExchange',
  components: {
    Navbar,
    Hero,
    ExchangeList,
    Pagination,
  },
  data(){
    return {
      brandName: 'Exchange',
      menuItems: [
        {text: "Home", link: "/"},
        {text: "About", link: "/about"},
        {text: "FAQ", link: "/faq"},
        {text: "login", link: "/login"},
        {text: "Register", link: "/register"}
      ],
      exchanges: [{
        id: "ad7a1231238dasd",
        type: "product", // service or product
        title: "New Tesla Car",
        description: "I will exchange this nice Tesla car",
        price: 200,
        user: "2398173193",
        image: "https://images.unsplash.com/photo-1554744512-d6c603f27c54?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=50",
        country: "Germany",
        city: "Berlin",
        tags: ["cars", "electric"]
      },
      {
        id: "ad7asdzxasa68dasd",
        type: "service", // service or product
        title: "Programming Lessons",
        description: "I will make you a super programmer",
        price: 45, // value per hour in case of service,
        user: "asd7as9d7",
        image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
        country: "Spain",
        city: "Barcelona",
        tags: ["programming", "code"]
      }]
    }
  }
}
</script>

<!--
  // npm install --save css-loader@^5
  // npm install --save sass-loader@^10
  // npm install sass
--> 

<style lang="scss">

  .hero-section {
    position: relative;
  }
  .posts {
    padding-top: 70px;
  }
  .posts-type {
    font-size: 34px;
    margin-bottom: 10px;
    font-weight: bold;
  }
  .search-lookup {
    width: 960px;
    margin: 0 auto;
    background-color: #262d32;
    padding: 20px;
    color: white;
    border-radius: 10px;
  }
  .search-lookup-wrap {
    width: 100%;
    z-index: 2;
    position: absolute;
    top: auto;
    bottom: -42px;
  }
  @media only screen and (max-width: 769px) {
    .search-lookup-wrap {
      position: inherit;
      bottom: unset;
    }
    .search-lookup {
      width: 100%;
      border-radius: 0px;
    }
  }
  .search-card-find {
    width: 100%;
    height: 180px;
    position: relative;
    display: block;
    border-radius: 3px;
    text-decoration: none;
    box-shadow: 0 0 1px rgba(0,0,0,.05);
    background-clip: content-box;
    background-size: cover;
    background-position: 50% 20%;
    border: 1px solid rgba(0,0,0,.12);
    -webkit-tap-highlight-color: transparent;
    &-interest {
      position: absolute;
      bottom: 12px;
      right: 12px;
      > p {
        font-weight: bold;
      }
    }
    .title {
      color: white;
    }
    .subtitle {
      color: white;
    }
    &-content {
      &-date {
        margin: 10px;
        width: 70px;
        text-align: center;
        border-radius: 50%;
        .day {
          display: block;
          font-size: 21px;
          color: white;
          font-weight: bold;
        }
        .month {
          display: block;
          color: #ff5050;
          font-weight: bold;
          font-size: 23px;
          margin-bottom: -5px;
        }
      }
      &-info {
        position: absolute;
        bottom: 0;
        left: 0;
        padding: 15px;
        width: 100%;
      }
    }
  }
</style>