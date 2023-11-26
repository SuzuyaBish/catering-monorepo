import 'package:catering_mobile/screen/blog.dart';
import 'package:catering_mobile/screen/home.dart';
import 'package:catering_mobile/screen/recipe.dart';
import 'package:flutter/material.dart';
import 'package:flutter_hooks/flutter_hooks.dart';

class IndexPage extends HookWidget {
  const IndexPage({super.key});

  @override
  Widget build(BuildContext context) {
    final pageIndex = useState(0);

    final pages = [
      const HomePage(),
      const RecipePage(),
      const BlogPage(),
      // const TermsAndConditionsPage(),
    ];

    return Scaffold(
      body: pages[pageIndex.value],
      bottomNavigationBar: NavigationBar(
        selectedIndex: pageIndex.value,
        onDestinationSelected: (index) => pageIndex.value = index,
        destinations: const [
          NavigationDestination(
            icon: Icon(Icons.home),
            label: 'Home',
          ),
          NavigationDestination(
            icon: Icon(Icons.restaurant),
            label: 'Recipes',
          ),
          NavigationDestination(
            icon: Icon(Icons.book),
            label: 'Blog',
          ),
          // NavigationDestination(
          //   icon: const Icon(Icons.book),
          //   label: 'Terms & Conditions',
          // ),
        ],
      ),
    );
  }
}
