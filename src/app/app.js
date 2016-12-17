var app = angular.module('CysticFibrosis', ['ngRoute', 'ui.bootstrap']);

app.factory('DataSource', ['$http', function($http) {
    return {
        get: function(fileName, callback) {
            $http.get(fileName).
            success(function(data, status) {
                callback(data);
            });
        }
    };
}]);

app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: './views/home.html'

        })
        .when('/nutrition', {
            templateUrl: './views/nutrition.html',
            controller: 'bmiController'


        })
        .when('/brand', {
            templateUrl: './views/home.html'

        })
        .when('/home', {
            templateUrl: './views/home.html'

        })
        .when('/information', {
            templateUrl: './views/information.html',
            controller: ''

        })
        .when('/about', {
            templateUrl: './views/about.html'

        })
        .when('/heart', {
            templateUrl: './views/heart.html'

        })
        .when('/blood', {
            templateUrl: './views/blood.html'

        })

    .otherwise('/home');


});

app.controller('MainCtrl', function($scope) {
    $scope.name = 'World';
});

app.controller('DropdownCtrl', function($scope) {

    $scope.items = [
        "The first choice!",
        "And another choice for you.",
        "but wait! A third!"
    ];
});


app.controller('InformationController', function($scope) {
    $scope.defs = ['Cystic fibrosis is a disease that changes how your body makes mucus and sweat. It affects how well your lungs, digestive system, and some other body parts work. It’s caused by a flawed gene. If you have cystic fibrosis, you may have mucus that’s too thick or sweat that’s too salty. If heavy mucus clogs your lungs, it’s hard to breathe. It can also block your pancreas, an organ in your belly, so you can’t digest your food as well. The disease may make you sweat away too much of the salt your body needs to work well. Most people diagnosed with cystic fibrosis today are babies, thanks to newborn screening programs. More than 75% of children with cystic fibrosis get a diagnosis by age 2. In some cases, people don’t find out they have cystic fibrosis until they’re teens or adults. Parents can also test their babies for cystic fibrosis before they’re born. Cystic fibrosis is a serious disease that can be life-threatening. But it’s different for everyone. Symptoms are mild for some people and severe for others. The good news is that most people with cystic fibrosis now live twice as long as they did 30 years ago. Today, some people are living into their 40s, 50s, or longer. The key is to get treatment as early as possible. Right now, there are many ways to ease symptoms and help you manage the condition.'];

    $scope.causes = ['Everyone has a gene called CTFR, which makes a protein that controls how salt and water move in and out of the body’s cells. If you have cystic fibrosis, your CTFR gene is broken. That’s because you inherited two bad copies of the gene, one from each parent. If someone has only one copy, they will not get cystic fibrosis, but they could pass the gene on to their children. A bad CFTR gene can cause your cells to make the wrong amount of salt or water. That’s what makes your mucus too thick or your sweat too salty. It becomes a problem when your body can’t get the oxygen or nutrients it needs, or it loses them through sweat. Scientists have found more than 1,000 different types of changes, called mutations, to the CFTR gene in people with cystic fibrosis. About 70% of people with cystic fibrosis have the most common one, called Delta F508. The different gene mutations can make a difference in the symptoms you have. As doctors learn more about the mutations, they are looking for specific treatments for each one. ']

    $scope.quest = ['If your child is diagnosed with cystic fibrosis, you’ll want to find out as much about the condition as you can. You may want to ask: Does my child need any more tests? Do we need to see any other doctors? What kind of gene mutations caused his cystic fibrosis? What kind of treatments are there? How will those treatments make him feel? How can I keep him from having trouble breathing? How can I keep him from getting lung infections? How can I make sure he gets enough nutrients from his food? Do my other children need to get tested? ']

    $scope.treats = ['There’s no cure for cystic fibrosis. But there are many treatments that ease symptoms and help people of all ages feel better, breathe easier, have fewer infections or stomach problems, and get enough nutrients. Airway clearance techniques can help you breathe by clearing the mucus from your lungs. There are many ways to do it, and special devices can help. One common method is called postural drainage and percussion. You sit or lie in different positions to let mucus drain from the small airways in your lungs to the large ones. Then, you or someone else taps your chest to loosen the mucus even more, which allows you to get rid of it with a cough. You may need to do this every day, depending on your symptoms. Inhaled drugs like dornase alfa (Pulmozyme), albuterol, salt solution, steroids, or antibiotics thin mucus, clear the lungs, and fight infections. Medicines such as ibuprofen fight inflammation and reduce swelling in your lungs. If your pancreas isn’t working well, taking enzyme pills will help you digest fats and proteins and absorb more vitamins from your food. Supplements of vitamins A, D, and E can replace the nutrients your intestines can’t absorb. Oxygen therapy. If you have severe lung disease, you may need to breathe oxygen through a mask or prongs in your nose. Scientists are also making new drugs that fix problems in the faulty proteins that cause cystic fibrosis symptoms.']

    $scope.urcare = ['Whether you have cystic fibrosis or you’re caring for your child who does, it’s important to have regular checkups and follow the doctor’s treatment plan. There are also many things people with cystic fibrosis can do to stay as healthy as possible and live an active life. Avoid getting or spreading germs. Thick mucus traps bacteria in your lungs, causing infections. Wash your hands, cover your mouth when you cough, get recommended vaccines, and try to stay away from people who are sick. Eat a healthy diet. Fruits, vegetables, and whole grains are good for everyone. People with cystic fibrosis, especially growing children, may need to get more calories and extra vitamins because of their symptoms. A dietitian can help you plan meals. Don’t smoke. Smoking or being around smoke damages your lungs and makes it even harder to breathe. Stay active. Aerobic exercise -- the kind that gets your heart rate up and makes you breathe harder -- is good for your lungs and your health in general. Ask your doctor about the kind of activities she recommends. If you sweat a lot during a workout, you may need to get extra salt in your diet. Physical therapy. Therapy can help you build lung strength and ease breathing.']


    $scope.syms = ['Babies can show signs of cystic fibrosis soon after birth. Some of the first ones you might notice could be: Your baby’s skin tastes salty when you kiss it. She doesn’t poop when she’s first born. All U.S. states screen newborns for cystic fibrosis, so if your child has it, you’ll most likely find out right away. As your child gets older, his symptoms could include: Coughing up thick mucus Wheezing or shortness of breath Getting sinus infections, bronchitis, or pneumonia often Growths, called polyps, in the nose Bulky, oily, or foul-smelling stool Too much gas, constipation, or stomach pain Weight loss or failure to gain weight Low bone density Wide, rounded fingertips and toes, called clubbing Sometimes symptoms don’t appear until the teen or adult years. A late diagnosis may mean you have a more mild case of cystic fibrosis. Most people’s symptoms will get worse over time. Later in life, cystic fibrosis can also cause pancreatitis, liver disease, or gallstones. Many people will get cystic fibrosis-related diabetes as they get older. The disease is similar to type 1 and type 2 diabetes, but it’s not exactly the same. People can manage it by watching their blood sugar and taking insulin, a medicine that helps the body use sugar. ']

    $scope.diags = ['It’s important to diagnose cystic fibrosis early so you can treat symptoms and avoid problems. If your child has cystic fibrosis, you may find out soon after or even before he’s born. When your baby is born: A few hours after birth, hospital staff take a sample of your baby’s blood, usually from his foot. Sometimes scientists check it for broken CTFR genes. Other times, they look for signs that the baby’s pancreas is working well. Because there are so many different gene flaws that cause cystic fibrosis, the newborn screening test may not find the disease in everyone who has it. If the screening test finds cystic fibrosis, that doesn’t always mean your baby has the disease. Your doctor will find out for sure by measuring how much salt is in his sweat. A high level means he has cystic fibrosis. As your baby grows up: Doctors also use the sweat test to check older children and adults who have symptoms but weren’t diagnosed as babies. They may use other tests as well, including: Chest X-ray. It uses low doses of radiation to make a picture of the inside of your child’s body. Lung function tests . They measure how much air your child can breathe in and out, and how fast. They also check the levels of oxygen in your child’s blood. These tests can include: Spirometry. Your child will breathe out as hard as he can into a tube attached to machine that records his breath. Lung volume measurement. Your child will sit in a glass booth and breathe in and out through a tube. The booth senses changes in pressure that tell doctors how much air he’s breathing into his lungs. Pulse oximetry. Doctors will clip a small sensor to your child’s fingertip to measure the amount of oxygen in his blood. Mucus test. Doctors look for a certain kind of bacteria that’s common in severe cystic fibrosis. Along with testing, your doctor may also ask you questions about your child’s symptoms, including: Does he have trouble breathing? How often does he have trouble with digestion? When was the last time he had a sinus infection, bronchitis, or pneumonia? Has anyone in your family been diagnosed with cystic fibrosis? Does he have any other medical conditions? ']

    $scope.nutris = ['Cystic fibrosis (CF) is a life-threatening disease that causes thick, sticky mucus to build up in the lungs and digestive tract. People with CF need to eat foods that are high in calories and protein throughout the day. The pancreas is an organ in the abdomen behind the stomach. An important job of the pancreas is to make enzymes. These enzymes help the body digest and absorb protein and fats. A buildup of sticky mucus in the pancreas from CF can lead to serious problems, including: Stools that contain mucus, are foul smelling, or float Gas, bloating, or distended belly Problems getting enough protein, fat, and calories in the diet Because of these problems, people with CF may have a hard time staying at a normal weight. Even when weight is normal, a person may not be getting the right nutrition. Children with CF may not grow or develop correctly. Recommendations The following are ways for adding protein and calories to the diet. Be sure to follow other specific instructions from your health care provider. Enzymes, vitamins, and salt: Most people with CF must take pancreatic enzymes. These enzymes help your body absorb fat and protein. Taking them all the time will decrease or get rid of foul-smelling stools, gas, and bloating. Take enzymes with all meals and snacks. Talk to your provider about increasing or decreasing your enzymes, depending on your symptoms. Ask your provider about taking vitamins A, D, E, K, and extra calcium. There are special formulas for people with CF. People who live in hot climates may need a small amount of extra table salt. Eating patterns: Eat whenever you are hungry. This may mean eating several small meals throughout the day. Keep a variety of nutritious snack foods around. Try to snack on something every hour, such as cheese and crackers, muffins, or trail mix. Try to eat regularly, even if it is only a few bites. Or, include a nutrition supplement or milkshake. Be flexible. If you are not hungry at dinner time, make breakfast, mid-morning snacks, and lunch your main meals. Getting more calories and protein: Add grated cheese to soups, sauces, casseroles, vegetables, mashed potatoes, rice, noodles, or meat loaf. Use whole milk, half and half, cream, or enriched milk in cooking or beverages. Enriched milk has nonfat dry milk powder added to it. Spread peanut butter on bread products or use it as a dip for raw vegetables and fruit. Add peanut butter to sauces or use on waffles. Skim milk powder adds protein. Try adding 2 tablespoons (8.5 grams) of dry skim milk powder in addition to the amount of regular milk in recipes. Add marshmallows to fruit or hot chocolate. Add raisins, dates, or chopped nuts and brown sugar to hot or cold cereals, or have them for snacks. A teaspoon (5 g) of butter or margarine adds 45 calories to foods. Mix it into hot foods such as soups, vegetables, mashed potatoes, cooked cereal, and rice. Serve it on hot foods. Hot breads, pancakes, or waffles absorb more butter. Use sour cream or yogurt on vegetables such as potatoes, beans, carrots, or squash. It can also be used as a dressing for fruit. Breaded meat, chicken, and fish have more calories than broiled or plain roasted. Add extra cheese on top of frozen prepared pizza. Add coarsely chopped hard cooked egg and cheese cubes to a tossed salad. Serve cottage cheese with canned or fresh fruit. Add grated cheeses, tuna, shrimp, crabmeat, ground beef, diced ham or sliced boiled eggs to sauces, rice, casseroles, and noodles.']

    $scope.expects = ['Whether you have cystic fibrosis or you’re caring for your child who does, it’s important to have regular checkups and follow the doctor’s treatment plan. There are also many things people with cystic fibrosis can do to stay as healthy as possible and live an active life. Avoid getting or spreading germs. Thick mucus traps bacteria in your lungs, causing infections. Wash your hands, cover your mouth when you cough, get recommended vaccines, and try to stay away from people who are sick. Eat a healthy diet. Fruits, vegetables, and whole grains are good for everyone. People with cystic fibrosis, especially growing children, may need to get more calories and extra vitamins because of their symptoms. A dietitian can help you plan meals. Don’t smoke. Smoking or being around smoke damages your lungs and makes it even harder to breathe. Stay active. Aerobic exercise -- the kind that gets your heart rate up and makes you breathe harder -- is good for your lungs and your health in general. Ask your doctor about the kind of activities she recommends. If you sweat a lot during a workout, you may need to get extra salt in your diet. Physical therapy. Therapy can help you build lung strength and ease breathing.']
});

app.controller('Slidee', function($scope) {


    // Retrieving images from directory in to slide array;


    $scope.myInterval = 2000;

    $scope.slides = [{ // Image array for slide show
            image: './src/images/slides/1.jpg'
        },
        {
            image: './src/images/slides/2.jpg'
        },
        {
            image: './src/images/slides/3.jpg'
        },
        {
            image: './src/images/slides/4.jpg'
        }
    ];





});
app.controller('ImageSlider', function($scope, DataSource) {
    $scope.myInterval = 2000;

    var IMAGE_WIDTH = 100;
    $scope.IMAGE_LOCATION = "./src/images/slides/";

    // Retrieving and creating image array using json files
    DataSource.get("./src/JsonImageFiles/slide.json", function(data) {
        $scope.slides = data;

    });



});

app.controller('inforControl', function($scope, DataSource) {




    // Retrieving and creating image array using json files
    DataSource.get("./src/JsonImageFiles/CF.json", function(data) {
        $scope.slides = data;

    });



});