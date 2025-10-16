### **Manual Bazel Setup for Java Projects**

This document outlines the steps to manually set up a Bazel build for the Java projects within this workspace.

**Step 1: Create the Bazel `WORKSPACE` file**

This file defines the project root for Bazel.

```bash
# In the root of poly-monorepo-basel
touch WORKSPACE
```

**Step 2: Configure External Maven Dependencies**

Add the necessary boilerplate to the `WORKSPACE` file to allow Bazel to fetch Maven artifacts like Spring Boot.

```bash
# In the root of poly-monorepo-basel
echo '
load("@bazel_tools//tools/build_defs/repo:http.bzl", "http_archive")

http_archive(
    name = "rules_jvm_external",
    strip_prefix = "rules_jvm_external-4.5",
    sha256 = "b3102d3c4e4a48f3885f738a16c343d05e800c4c6b2ca438f3485b81234861ac",
    url = "https://github.com/bazelbuild/rules_jvm_external/archive/refs/tags/4.5.zip",
)

load("@rules_jvm_external//:defs.bzl", "maven_install")

maven_install(
    artifacts = [
        "org.springframework.boot:spring-boot-starter-web:3.2.0",
        "org.springframework.boot:spring-boot-starter-test:3.2.0",
    ],
    repositories = [
        "https://repo1.maven.org/maven2",
    ],
)
' > WORKSPACE
```

**Step 3: Create `BUILD.bazel` for the `core-domain` library**

This defines the `core-domain` project as a `java_library` that other projects can depend on.

```bash
# In the root of poly-monorepo-basel
echo '
java_library(
    name = "core-domain",
    srcs = glob(["src/main/java/**/*.java"]),
    visibility = ["//visibility:public"],
)
' > libs/java/core-domain/BUILD.bazel
```

**Step 4: Create `BUILD.bazel` for the `facility-service` application**

This defines the `facility-service` as a runnable `java_binary` and a `java_test` target. It depends on `core-domain` and Spring Boot.

```bash
# In the root of poly-monorepo-basel
echo '
java_binary(
    name = "facility-service_bin",
    srcs = glob(["src/main/java/**/*.java"]),
    main_class = "com.jpmc.facility.service.FacilityServiceApplication",
    deps = [
        "//libs/java/core-domain",
        "@maven//:org.springframework.boot_spring_boot_starter_web",
    ],
)

java_test(
    name = "tests",
    srcs = glob(["src/test/java/**/*.java"]),
    test_class = "com.jpmc.facility.service.FacilityServiceApplicationTests",
    deps = [
        ":facility-service_bin",
        "@maven//:org.springframework.boot_spring_boot_starter_test",
    ],
)
' > apps/java/facility-service/BUILD.bazel
```

**Step 5: Build the application with Bazel**

This command will build the `facility-service` application and all its dependencies.

```bash
# In the root of poly-monorepo-basel
bazel build //apps/java/facility-service:facility-service_bin
```