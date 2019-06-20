const ArcadeGame = require('../models/arcadegame');
const mongoose = require('mongoose');

exports.index = (req, res) => {
    ArcadeGame.find()
      .then(arcadegames => {
        res.render('arcadegames/index', {
          arcadegames: arcadegames,
          title: 'Archive'
        });
      })
      .catch(err => {
        res.redirect('/');
      });
};

exports.show = (req, res) => {
  ArcadeGame.findOne({
      _id: req.params.id,
  })
  .then(arcadegame => {
      res.render('arcadegames/show', {
      arcadegame: arcadegame,
      title: arcadegame.title
      });
  })
  .catch(err => {
      res.redirect('/');
  });
};


exports.new = (req, res) => {
  res.render('arcadegames/new', {
    title: 'New Arcade Game'
  });
};

exports.edit = (req, res) => {
  arcadegame.findOne({
      _id: req.params.id,
    })
    .then(arcadegame => {
      res.render('arcadegames/edit', {
        arcadegame: arcadegame,
        title: arcadegame.title
      });
    })
    .catch(err => {
      req.flash('error', `ERROR: ${err}`);
      res.redirect('/');
    });
};

exports.create = (req, res) => {
  req.isAuthenticated();

  req.body.arcadegame.author = req.session.userId;
  ArcadeGame.create(req.body.arcadegame)
    .then(() => {
      res.redirect('/arcadegames');
    })
    .catch(err => {
      res.redirect('/arcadegames/new');
    });
};

exports.update = (req, res) => {
  arcadegame.updateOne({
      _id: req.body.id,
    }, req.body.arcadegame, {
      runValidators: true
    })
    .then(() => {
      res.redirect(`/arcadegames/${req.body.id}`);
    })
    .catch(err => {
      res.redirect(`/arcadegames/${req.body.id}/edit`);
    });
};

exports.destroy = (req, res) => {
  ArcadeGame.deleteOne({
      _id: req.body.id,
    })
    .then(() => {
      res.redirect('/arcadegames');
    })
    .catch(err => {
      res.redirect(`/arcadegames`);
    });
};