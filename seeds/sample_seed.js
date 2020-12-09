
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('movie_lists').del()
    .then(function () {
      // Inserts seed entries
      return knex('movie_lists').insert([
        {title: 'The Chemical Brothers - Eve Of Destruction', URL:"https://www.youtube.com/watch?v=sYsXKhBknyM"},
        {title: 'UMI - Introspection Live Show', URL:"https://www.youtube.com/watch?v=0GLgdo96iiQ"},
        {title: '夜の雰囲気に合うメロウな女性ボーカルChill mix（CityPop/R&B）', URL:"https://www.youtube.com/watch?v=y4o9wS1TVQA&t=347s"},
        {title: 'Daft Punk - One More Time (Official Video)', URL:"https://www.youtube.com/watch?v=FGBhQbmPwH8&list=RDEMni3jl65KF37F9JYsJM8DGg&start_radio=1"}
      ]);
    });
};
