import 'package:catering_mobile/screen/contact.dart';
import 'package:catering_mobile/screen/create_blog.dart';
import 'package:catering_mobile/screen/home.dart';
import 'package:catering_mobile/screen/recipe.dart';
import 'package:catering_mobile/screen/square.dart';
import 'package:flutter/material.dart';

class BlogPage extends StatefulWidget {
  const BlogPage({super.key});

  @override
  _blog createState() => _blog();
}

class _blog extends State<BlogPage> {
  late final PageController pageController;
  final List _posts = [
    'post 1',
    'post 2',
    'post 3',
    'post 4',
    'post 5',
    'post 6',
  ];
  bool showBtmAppBr = true;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text(
          "Recent Posts",
          style: TextStyle(color: Colors.black, fontSize: 25),
        ),
        centerTitle: true,
        backgroundColor: const Color.fromARGB(255, 55, 175, 166),
        actions: <Widget>[
          IconButton(
            icon: const Icon(
              Icons.add,
              color: Colors.black,
            ),
            onPressed: () {
              Navigator.push(
                  context,
                  MaterialPageRoute(
                      builder: (context) => createBlog())); // do something
            },
          )
        ],
      ),
      body: ListView.builder(
          itemCount: _posts.length,
          itemBuilder: (context, index) {
            return MySquare(
              child: _posts[index],
            );
          }),
      bottomNavigationBar: AnimatedContainer(
        duration: const Duration(
          milliseconds: 800,
        ),
        curve: Curves.easeInOutSine,
        height: showBtmAppBr ? 70 : 0,
        child: BottomAppBar(
          notchMargin: 8.0,
          shape: const CircularNotchedRectangle(),
          child: Row(
            mainAxisAlignment: MainAxisAlignment.spaceEvenly,
            children: [
              IconButton(
                onPressed: () {
                  Navigator.of(context).push(MaterialPageRoute(
                      builder: (context) => const HomePage()));
                },
                icon: const Icon(
                  Icons.home_outlined,
                ),
              ),
              IconButton(
                onPressed: () {
                  Navigator.of(context).push(MaterialPageRoute(
                      builder: (context) => const RecipePage()));
                },
                icon: const Icon(
                  Icons.fastfood_outlined,
                ),
              ),
              IconButton(
                onPressed: () {
                  Navigator.of(context).push(MaterialPageRoute(
                      builder: (context) => const BlogPage()));
                },
                icon: const Icon(
                  Icons.message,
                ),
              ),
              IconButton(
                onPressed: () {
                  Navigator.of(context).push(
                      MaterialPageRoute(builder: (context) => const contact()));
                },
                icon: const Icon(
                  Icons.contact_phone,
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
