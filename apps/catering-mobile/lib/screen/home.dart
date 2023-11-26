import 'package:catering_mobile/functions/blog_functions.dart';
import 'package:catering_mobile/functions/recipe_functions.dart';
import 'package:flutter/material.dart';
import 'package:flutter_hooks/flutter_hooks.dart';

class HomePage extends HookWidget {
  const HomePage({super.key});

  @override
  Widget build(BuildContext context) {
    final recipes = useState([]);
    final blogs = useState([]);
    final loading = useState(true);

    useEffect(() {
      RecipeFunctions.fetchRecipes().then((value) {
        recipes.value = value;
      }).then((v) {
        BlogFunctions.fetchBlogs().then((value) {
          blogs.value = value;
          loading.value = false;
        });
      });

      return () {};
    }, []);

    return Scaffold(
      body: loading.value
          ? const Center(child: (CircularProgressIndicator()))
          : SafeArea(
              child: Padding(
                padding: const EdgeInsets.only(top: 20, bottom: 20),
                child: Column(
                  children: [
                    SizedBox(
                      height: 200,
                      child: ListView.builder(
                        scrollDirection: Axis.horizontal,
                        itemCount: recipes.value.length,
                        itemBuilder: (context, index) {
                          return Container(
                            width: 200,
                            margin: const EdgeInsets.all(8),
                            decoration: BoxDecoration(
                              color: Colors.grey,
                              borderRadius: BorderRadius.circular(16),
                              image: DecorationImage(
                                image: NetworkImage(
                                  recipes.value[index]['image'],
                                ),
                                fit: BoxFit.cover,
                              ),
                            ),
                          );
                        },
                      ),
                    ),
                    Container(
                      child: Expanded(
                        child: ListView.builder(
                          itemCount: blogs.value.length,
                          itemBuilder: (context, index) {
                            return Container(
                              height: 200,
                              margin: const EdgeInsets.all(8),
                              decoration: BoxDecoration(
                                color: Colors.grey,
                                borderRadius: BorderRadius.circular(16),
                                image: DecorationImage(
                                  image: NetworkImage(
                                    blogs.value[index]['image'],
                                  ),
                                  fit: BoxFit.cover,
                                ),
                              ),
                              child: Text(recipes.value.length.toString()),
                            );
                          },
                        ),
                      ),
                    ),
                  ],
                ),
              ),
            ),
    );
  }
}
