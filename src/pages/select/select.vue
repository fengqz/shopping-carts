<style lang="less" scoped>
  .shopcart{ margin-bottom: 6rem;}
  .nav{width: 100%;text-align: center;border-bottom: 1px solid silver; text-align: left; height: 5rem; background: #fafafa; position:fixed;
    span{line-height:5rem;font-size: 1.5rem; display:block;  text-align: center;}
    .retback{line-height: 5rem; height: 5rem; width: 6rem; position: absolute;left: 0; top: 0; text-align: center;
      img{ height: 40%; vertical-align: middle;}
    }
    .tuiback{line-height: 5rem; height: 5rem; width: 6rem; position: absolute;right: 0; top: 0; text-align: center;
      img{ height: 40%;vertical-align: middle;}
    }

  }
  .caititle{ height: 5rem;}
  .titlbox{background:white; text-align: center; margin-bottom: 0.3rem;
    img{width:auto;}
  }
  .zy{width: 100%;
    .hg{margin-top: 0.5rem;width: 100%;font-size: 1.2rem;overflow: hidden; text-align: left;
      img{width: 2rem;height: 2rem;float: right;margin-top: 0.1rem;margin-right: 0.5rem;}
      .hg-1{border-radius: 2px;margin-left: 0.5rem;text-align: center;color: white;width: 3rem;display: inline-block;background-color: red;}
    }
    .sp1{background-color: #FFFFFF;
      .p{ width: 100%; height: 3rem ; overflow: hidden;
        p{ float: right; color: black; font-size:1.2rem; margin-top: 0.2rem; margin-right: 0.5rem;}
        span{ color: silver; margin-right: 1rem; margin-top: 0.3rem; float: right; font-size: 1.2rem;}
      }
    }
    .Llistofs{ width: 100%;display: flex ; flex-direction: row ;flex-wrap: wrap-reverse ; justify-content: space-between ; align-items: center ; align-content: center ;  margin-top: 0; padding-bottom: 1rem;
      div{
        &:nth-of-type(1){ width: 2rem; display:block;  height: 100%; flex: 1;
          a{ }

        }
        &:nth-of-type(2){flex: 1 1 6rem;
          img{width: 100%; height: auto;}
        }
        &:nth-of-type(3){ flex:3; text-align: left; margin-left: 0.5rem;align-content: center;
          .title{display: block; font-size: 1.5rem; width: 95%; height:2rem; overflow:hidden;  text-overflow:ellipsis;}
          span{
            &:nth-of-type(1){ font-size: 1.4rem;}
            &:nth-of-type(2){ font-size: 1.3rem; color: #666;}
            &:nth-of-type(3){ font-size: 1rem; color: #999;}
          }
          p{font-size: 0.8rem; color: red;
            span{font-size: 12rem}
          }
          p:nth-of-type(2){color: #910000; margin-top: -10px;}


          .quentity{ float: right;margin-right: 0.8rem;width:8rem; margin-top:0rem;height: 2rem;border:1px solid darkgray; border-radius: 4px;
            a{ text-align: center; width: 30%; color:#666; height: 100%; display: inline-block;
              &:nth-of-type(1){  border-right: 1px solid darkgray;float: left;}
              &:nth-of-type(2){  border-left: 1px solid darkgray; float: right;}
            }
            input{ height: 1.9rem;  width: 40%; outline: none;  text-align: center; font-size: 1rem;border: none; background: none; }
          }

        }
      }
    }

  }
      .item-check-btn {display: inline-block;width: 2rem;height: 2rem;border: 1px solid #ccc;border-radius: 50%;text-align: center;vertical-align: middle;cursor: pointer;
        .icon-ok {display: none;width: 100%; line-height: 11px;height: 100%;fill: #fff;-ms-transform: scale(0.8);transform: scale(0.8);}
  }
  .item-check-btn.check { background: #EE7A23; border-color: #EE7A23; line-height: 1.6rem;
      .icon-ok {display: inline-block;}
  }
.Settlement{ position: fixed;bottom: 5rem;height: 6rem; display: flex ;flex-direction: row ;flex-wrap: wrap-reverse ; justify-content: space-between ; align-items: center ; align-content: center ;width:100%;background:white;
  div{font-size: 1.2rem;
   &:nth-of-type(1){flex: 1 1 4rem;font-weight: bold; font-size: 1.6rem;}
    &:nth-of-type(2){flex: 2 2 10rem; text-align: left;height: 6rem; line-height: 1.5rem; padding-top: 1rem;font-size: 1.8rem;
        span:nth-of-type(1){font-weight: bold;}
        span:nth-of-type(2){ color: #4F4F51;font-size: 1.2rem;}

    }
    &:nth-of-type(3){flex: 3; font-size: 1.6rem; background: #f23030;height: 6rem; color: white;font-weight: bold; line-height: 6rem;}

  }
}
  .mu-raised-button{ width: 45% !important; }
  .mu-dialog-body {
    padding: 0!important;
    color: rgba(0,0,0,.6);
  }
  .mu-dialog {
    padding: 0!important;
    color: rgba(0,0,0,.6);
  }



</style>
<template>
  <div class="select">
    <div class="hacker-news-list">
    <div class="hacker-news-header">
      <a target="_blank" href="http://www.ycombinator.com/">
        <img src="https://news.ycombinator.com/y18.gif">
      </a>
      <span>Hacker News</span>
      <select v-model="tag" @change="changeFilter()">
        <option value="story">Story</option>
        <option value="poll">Poll</option>
        <option value="show_hn">Show hn</option>
        <option value="ask_hn">Ask hn</option>
        <option value="front_page">Front page</option>
      </select>
    </div>
    <div class="hacker-news-item" v-for="(item, key) in list">
      <span class="num" v-text="key + 1"></span>
      <p>
        <a target="_blank" :href="item.url" v-text="item.title"></a>
      </p>
      <p>
        <small>
          <span v-text="item.points"></span>
          points by
          <a target="_blank" :href="'https://news.ycombinator.com/user?id=' + item.author"
           v-text="item.author"></a>
          |
          <a target="_blank" :href="'https://news.ycombinator.com/item?id=' + item.objectID"
           v-text="item.num_comments + ' comments'"></a>
        </small>
      </p>
    </div>
    <infinite-loading :on-infinite="onInfinite" ref="infiniteLoading">
    <span slot="no-more">
      There is no more Hacker News :(
    </span>
    </infinite-loading>
  </div>

  </div>

</template>
<script>
  import InfiniteLoading from 'vue-infinite-loading';
  //const api = 'http://localhost:3000/routk';
 const api = 'http://hn.algolia.com/api/v1/search_by_date';

  export default {
    data() {
      return {
        list: [],
        tag: 'story',
      };
    },
    methods: {
      onInfinite() {
        this.$http.get(api, {
          params: {
            tags: this.tag,
            page: this.list.length / 20 + 1,
          },
        }).then((res) => {
          if (res.data.hits.length) {
            this.list = this.list.concat(res.data.hits);
            this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded');
            if (this.list.length / 20 === 10) {
              this.$refs.infiniteLoading.$emit('$InfiniteLoading:complete');
            }
          } else {
            this.$refs.infiniteLoading.$emit('$InfiniteLoading:complete');
          }
        });
      },
      changeFilter() {
        this.list = [];
        this.$nextTick(() => {
          this.$refs.infiniteLoading.$emit('$InfiniteLoading:reset');
        });
      },
    },
    components: {
      InfiniteLoading,
    },
  };
</script>

