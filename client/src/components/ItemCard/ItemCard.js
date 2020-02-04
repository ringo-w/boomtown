import React, { Component } from "react";
import Gravatar from "react-gravatar";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import styles from "./styles";
import { withStyles } from "@material-ui/styles";
import moment from "moment";

class ItemCard extends Component {
  render() {
    let { item, classes } = this.props;

    return (
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="https://picsum.photos/350/400"
            title="Item"
          />
          <CardContent>
            <Typography>
              <Gravatar
                email={item && item.itemowner && item.itemowner.email}
              />
              {item.itemowner &&
                item.itemowner.fullname &&
                item.itemowner.fullname}
              {item && moment(item.created).fromNow()}
            </Typography>
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
        </CardActionArea>
        <CardActions>
          <Button size="large" color="secondary" variant="outlined">
            Borrow
          </Button>
        </CardActions>
      </Card>
    );
  }
}

export default withStyles(styles)(ItemCard);
