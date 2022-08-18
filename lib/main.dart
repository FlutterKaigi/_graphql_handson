import 'package:flutter/material.dart';
import 'package:flutter_dotenv/flutter_dotenv.dart';
import 'package:graphql_flutter/graphql_flutter.dart';
import 'package:graphql_handson/pages/index.dart';
import 'package:graphql_handson/provider/app_provider.dart';

Future<void> main() async {
  await dotenv.load(fileName: ".env");
  WidgetsFlutterBinding.ensureInitialized();
  await initHiveForFlutter();
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final GlobalKey<ScaffoldState> scaffoldKey = GlobalKey<ScaffoldState>();
    const title = 'FlutterKaigi 2022';
    return AppProvider(
      child: Builder(builder: (context) {
        return MaterialApp(
          title: title,
          home: Scaffold(
            key: scaffoldKey,
            appBar: AppBar(
              title: const Text(title),
            ),
            body: const MyTopPage(),
          ),
        );
      }),
    );
  }
}
