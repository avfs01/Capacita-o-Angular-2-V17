// A ordem de precedência da a preferência de operação aos valores

(15 * 20) / 10; // preferência pelo que está dentro dos ( )
(15 * 20 ) / 10 === 15 // passa pelos parênteses, divide e depois compara em  ===

(15 * 20 ) / 10 === 15 &&  10*10 === 100; // resolve as operações pela ordem de precedência, vai para segunda operação e depois compara com &&

(false && false) = false // precedência dos ( ) e depois da =