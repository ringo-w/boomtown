import React, { Component } from "react";
import Gravatar from "react-gravatar";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography
} from "@material-ui/core";
import styles from "./styles";
import { withStyles } from "@material-ui/styles";
import moment from "moment";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

class ItemCard extends Component {
  render() {
    let { item, classes, location } = this.props;

    return (
      <Card className={classes.card}>
        <CardActionArea>
          <Link
            to={
              item && item.itemowner.id ? `/profile/${item.itemowner.id}` : null
            }
            className={classes.link}
          >
            <CardMedia
              className={classes.media}
              image="https://picsum.photos/350/400"
              title="Item"
            />
            <CardContent>
              <div className={classes.userInfo}>
                <Typography>
                  <Gravatar
                    email={
                      (item && item.itemowner && item.itemowner.email) ||
                      item.email
                    }
                    className={classes.gravatar}
                  />
                </Typography>
                <Typography className={classes.flex}>
                  {(item.itemowner &&
                    item.itemowner.fullname &&
                    item.itemowner.fullname) ||
                    "Your name"}
                  <span>{item && moment(item.created).fromNow()}</span>
                </Typography>
              </div>
              <Typography gutterBottom variant="h5" component="h2">
                {item.title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {item.description}
              </Typography>
              <div className={classes.tagGrid}>
                {item.tags &&
                  item.tags.map(tags => {
                    return (
                      <Typography key={tags.id} variant="caption">
                        {tags.title}
                      </Typography>
                    );
                  })}
              </div>
            </CardContent>
          </Link>
        </CardActionArea>
        <CardActions>
          {location.pathname === "/items" && (
            <Button
              size="large"
              color="secondary"
              variant="outlined"
              className={location.pathname.match(/items/) ? "block" : "none"}
            >
              Borrow
            </Button>
          )}
        </CardActions>
      </Card>
    );
  }
}

ItemCard.propTypes = {
  classes: PropTypes.object.isRequired,
  item: PropTypes.object.isRequired
};

export default withRouter(withStyles(styles)(ItemCard));
